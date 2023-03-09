import { getMonth, getYear } from "date-fns";
import formatCalendarDate from "../utils/formatCalendarDate";
import isValidCalendarDate from "../utils/isValidCalendarDate";
import isValidCalendarRange from "../utils/isValidCalendarRange";
import { CalendarDate } from "./useCalendarDate";
import useCalendarRange, { CalendarRange } from "./useCalendarRange";

export type CalendarValue = CalendarDate | CalendarRange;
export type SelectionType = "single" | "range";

export interface CalendarValueControl {
    value?: CalendarValue;
    defaultValue?: CalendarValue;
    onChange?: (value: CalendarValue) => void;
    year?: number;
    month?: number;
    selectionType?: SelectionType;
}

export interface UseCalendarProps extends CalendarValueControl {}

export interface UseCalendarReturnType {
    selectionType: SelectionType;
    selectedValue: CalendarValue;
    setValue: (value: CalendarValue) => void;
    isEmpty: boolean;
    setEmptyValue: () => void;
    setDate: (d: CalendarDate) => void;
    setRangeByDates: (d: {
        from: string | number | Date;
        to: string | number | Date;
    }) => void;
    control: CalendarValueControl;
}

export const useCalendar = ({
    value: valueProp,
    defaultValue,
    onChange,
    selectionType = "single",
    year = getYear(new Date()),
    month = getMonth(new Date()) + 1,
}: UseCalendarProps = {}): UseCalendarReturnType => {
    const isValueProvided = valueProp !== undefined;
    const range = useCalendarRange({
        value: !isValueProvided
            ? undefined
            : typeof valueProp === "string"
            ? { from: valueProp, to: valueProp }
            : valueProp,
        defaultValue:
            typeof defaultValue !== "string"
                ? defaultValue
                : { from: defaultValue, to: defaultValue },
        onChange,
    });
    const value =
        selectionType === "single" ? range.value?.from ?? "" : range.value;

    const setValue = (val: CalendarValue) => {
        if (typeof val === "string" && isValidCalendarDate(val)) {
            const v = val ? { from: val, to: val } : { from: "", to: "" };
            if (!isValueProvided) {
                range.setValue(v);
            }
            onChange?.(selectionType === "single" ? val : v);
        } else if (typeof val !== "string" && isValidCalendarRange(val)) {
            range.setValue(val);
            onChange?.(selectionType === "range" ? val : val?.from ?? "");
        }
    };

    let isEmpty = !range.value;

    const setEmptyValue = () => {
        setValue(selectionType === "single" ? "" : { from: "", to: "" });
    };

    const setDate = (val: string | number | Date) => {
        setValue(formatCalendarDate(val));
    };

    const setRangeByDates = ({
        from,
        to,
    }: {
        from: string | number | Date;
        to: string | number | Date;
    }) => {
        if (selectionType === "range") {
            setValue({
                from: formatCalendarDate(from),
                to: formatCalendarDate(to),
            });
        } else {
            setValue(formatCalendarDate(from));
        }
    };

    return {
        control: {
            onChange: setValue,
            value,
            year,
            month,
            defaultValue,
            selectionType,
        },
        selectedValue: value,
        selectionType,
        setValue,
        isEmpty,
        setEmptyValue,
        setDate,
        setRangeByDates,
    };
};

import { subDays } from "date-fns";
import { useState } from "react";
import {
    calendarRangeMap,
    CalendarRangeName,
    calendarRanges,
} from "../data/calendarRanges";
import findDateRangeName from "../utils/findDateRangeName";
import { formatCalendarDate } from "../utils/formatCalendarDate";
import { getCalendarRange } from "../utils/getCalendarRange";
import isValidCalendarRange from "../utils/isValidCalendarRange";
import parseCalendarDate from "../utils/parseCalendarDate";
import { CalendarDate } from "./useCalendarDate";

export interface CalendarRange {
    from: CalendarDate;
    to: CalendarDate;
}

export interface UseCalendarControl {
    value?: CalendarRange;
    defaultValue?: CalendarRange;
    onChange?: (value: CalendarRange) => void;
}

export interface UseCalendarRangeParams extends UseCalendarControl {}

const emptyValue: CalendarRange = { from: "", to: "" };

const useCalendarRange = ({
    value: valueProp,
    defaultValue = { from: "", to: "" },
    onChange,
}: UseCalendarRangeParams = {}) => {
    const [range, setRange] = useState<CalendarRange>(
        isValidCalendarRange(defaultValue) ? defaultValue : emptyValue
    );
    const isValueProvided = valueProp !== undefined;
    const value = isValueProvided
        ? isValidCalendarRange(valueProp)
            ? valueProp
            : emptyValue
        : range;
    const setValue = (v: CalendarRange) => {
        if (isValidCalendarRange(v)) {
            if (!isValueProvided) {
                setRange(v);
            }
            onChange?.(v);
        }
    };
    const setRangeByDates = ({
        from,
        to,
    }: {
        from: string | number | Date;
        to: string | number | Date;
    }) => {
        const v = {
            from: formatCalendarDate(from),
            to: formatCalendarDate(to),
        };
        if (isValidCalendarRange(v)) {
            setValue(v);
        }
    };
    const rangeName = findDateRangeName(value);
    return {
        value,
        setValue,
        control: {
            value,
            onChange: setValue,
            defaultValue,
        },
        rangeName,
        ranges: calendarRanges,
        rangeMap: calendarRangeMap,
        rangeAsDates: {
            from: parseCalendarDate(value.from),
            to: parseCalendarDate(value.to),
        },
        setRangeByName: (name: CalendarRangeName) => {
            if (name === "custom") {
                const today = new Date();
                setRangeByDates({
                    from: today,
                    to: subDays(today, 9),
                });
            } else {
                const range = getCalendarRange(name);
                setValue(range);
            }
        },
        isEmpty: !value.from && !value.to,
        setEmptyValue: () => setValue(emptyValue),
    };
};

export default useCalendarRange;

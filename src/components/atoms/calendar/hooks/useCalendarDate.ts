import { useState } from "react";
import formatCalendarFormat from "../utils/formatCalendarDate";
import isValidCalendarDate from "../utils/isValidCalendarDate";
import parseCalendarDate from "../utils/parseCalendarDate";

export type CalendarDate = string;

export interface CalendarDateControl {
    value?: CalendarDate;
    defaultValue?: CalendarDate;
    onChange?: (value: CalendarDate) => void;
}

export interface UseCalendarDateParams extends CalendarDateControl {}

const useCalendarDate = ({
    value: valueProp,
    defaultValue = "",
    onChange,
}: UseCalendarDateParams = {}) => {
    const [internalValue, setInternalValue] = useState(
        isValidCalendarDate(defaultValue) ? defaultValue : ""
    );
    const isValueProvided = valueProp !== undefined;
    const value = isValueProvided
        ? isValidCalendarDate(valueProp)
            ? valueProp
            : ""
        : internalValue;
    const setValue = (v: CalendarDate) => {
        const val = isValidCalendarDate(v) ? v : "";
        if (!isValueProvided) {
            setInternalValue(val);
        }
        onChange?.(val);
    };
    return {
        value,
        date: parseCalendarDate(value),
        control: {
            value,
            defaultValue,
            onChange: setValue,
        },
        setValue,
        setDate: (d: string | number | Date) =>
            setValue(formatCalendarFormat(d)),
    };
};

export default useCalendarDate;

import { useState } from 'react';
import formatCalendarFormat from '../utils/formatCalendarDate';
import isValidCalendarDate from '../utils/isValidCalendarDate';
import parseCalendarDate from '../utils/parseCalendarDate';

export type CalendarDate = string;

export interface CalendarDateControl {
  defaultValue?: CalendarDate;
  onChange?: (value: CalendarDate) => void;
  value?: CalendarDate;
}

export type UseCalendarDateParams = CalendarDateControl;

const useCalendarDate = ({
  value: valueProp,
  defaultValue = '',
  onChange,
}: UseCalendarDateParams = {}) => {
  const [internalValue, setInternalValue] = useState(
    isValidCalendarDate(defaultValue) ? defaultValue : ''
  );
  const isValueProvided = valueProp !== undefined;
  const value = isValueProvided ? (isValidCalendarDate(valueProp) ? valueProp : '') : internalValue;
  const setValue = (v: CalendarDate) => {
    const val = isValidCalendarDate(v) ? v : '';
    if (!isValueProvided) {
      setInternalValue(val);
    }
    onChange?.(val);
  };
  return {
    control: {
      defaultValue,
      onChange: setValue,
      value,
    },
    date: parseCalendarDate(value),
    setDate: (d: string | number | Date) => setValue(formatCalendarFormat(d)),
    setValue,
    value,
  };
};

export default useCalendarDate;

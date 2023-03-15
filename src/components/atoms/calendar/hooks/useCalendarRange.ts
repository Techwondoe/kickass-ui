import { subDays } from 'date-fns';
import { useState } from 'react';
import { calendarRangeMap, CalendarRangeName, calendarRanges } from '../data/calendarRanges';
import findDateRangeName from '../utils/findDateRangeName';
import { formatCalendarDate } from '../utils/formatCalendarDate';
import { getCalendarRange } from '../utils/getCalendarRange';
import isValidCalendarRange from '../utils/isValidCalendarRange';
import parseCalendarDate from '../utils/parseCalendarDate';
import { CalendarDate } from './useCalendarDate';

export interface CalendarRange {
  from: CalendarDate;
  to: CalendarDate;
}

export interface UseCalendarControl {
  defaultValue?: CalendarRange;
  onChange?: (value: CalendarRange) => void;
  value?: CalendarRange;
}

export type UseCalendarRangeParams = UseCalendarControl;

const emptyValue: CalendarRange = { from: '', to: '' };

const useCalendarRange = ({
  value: valueProp,
  defaultValue = { from: '', to: '' },
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
    control: {
      defaultValue,
      onChange: setValue,
      value,
    },
    isEmpty: !value.from && !value.to,
    rangeAsDates: {
      from: parseCalendarDate(value.from),
      to: parseCalendarDate(value.to),
    },
    rangeMap: calendarRangeMap,
    rangeName,
    ranges: calendarRanges,
    setEmptyValue: () => setValue(emptyValue),
    setRangeByName: (name: CalendarRangeName) => {
      if (name === 'custom') {
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
    setValue,
    value,
  };
};

export default useCalendarRange;

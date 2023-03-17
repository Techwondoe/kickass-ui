import { getMonth, getYear } from 'date-fns';
import formatCalendarDate from '../utils/formatCalendarDate';
import isValidCalendarDate from '../utils/isValidCalendarDate';
import isValidCalendarRange from '../utils/isValidCalendarRange';
import { CalendarDate } from './useCalendarDate';
import useCalendarRange, { CalendarRange } from './useCalendarRange';

export type CalendarValue = CalendarDate | CalendarRange;
export type SelectionType = 'single' | 'range';

export interface CalendarValueControl {
  defaultValue?: CalendarValue;
  month?: number;
  onChange?: (value: CalendarValue) => void;
  selectionType?: SelectionType;
  value?: CalendarValue;
  year?: number;
}

export type UseCalendarProps = CalendarValueControl;

export interface UseCalendarReturnType {
  control: CalendarValueControl;
  isEmpty: boolean;
  selectedValue: CalendarValue;
  selectionType: SelectionType;
  setDate: (d: CalendarDate) => void;
  setEmptyValue: () => void;
  setRangeByDates: (d: { from: string | number | Date; to: string | number | Date }) => void;
  setValue: (value: CalendarValue) => void;
}

export const useCalendar = ({
  value: valueProp,
  defaultValue,
  onChange,
  selectionType = 'single',
  year = getYear(new Date()),
  month = getMonth(new Date()) + 1,
}: UseCalendarProps = {}): UseCalendarReturnType => {
  const isValueProvided = valueProp !== undefined;
  const range = useCalendarRange({
    value: !isValueProvided
      ? undefined
      : typeof valueProp === 'string'
      ? { from: valueProp, to: valueProp }
      : valueProp,
    defaultValue:
      typeof defaultValue !== 'string' ? defaultValue : { from: defaultValue, to: defaultValue },
    onChange,
  });
  const value = selectionType === 'single' ? range.value?.from ?? '' : range.value;

  const setValue = (val: CalendarValue) => {
    if (typeof val === 'string' && isValidCalendarDate(val)) {
      const v = val ? { from: val, to: val } : { from: '', to: '' };
      if (!isValueProvided) {
        range.setValue(v);
      }
      onChange?.(selectionType === 'single' ? val : v);
    } else if (typeof val !== 'string' && isValidCalendarRange(val)) {
      range.setValue(val);
      onChange?.(selectionType === 'range' ? val : val?.from ?? '');
    }
  };

  const isEmpty = !range.value;

  const setEmptyValue = () => {
    setValue(selectionType === 'single' ? '' : { from: '', to: '' });
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
    if (selectionType === 'range') {
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
      defaultValue,
      month,
      onChange: setValue,
      selectionType,
      value,
      year,
    },
    isEmpty,
    selectedValue: value,
    selectionType,
    setDate,
    setEmptyValue,
    setRangeByDates,
    setValue,
  };
};

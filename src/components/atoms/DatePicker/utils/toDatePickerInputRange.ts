import { CalendarRange } from '../../Calendar/hooks/useCalendarRange';
import parseCalendarDate from '../../Calendar/utils/parseCalendarDate';
import formatDatePickerInput from './formatDatePickerInput';

export const toDatePickerInputRange = (value: CalendarRange) => {
  const fromDate = parseCalendarDate(value.from);
  const toDate = parseCalendarDate(value.to);
  return {
    from: formatDatePickerInput(fromDate),
    to: formatDatePickerInput(toDate),
  };
};

export default toDatePickerInputRange;

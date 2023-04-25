import { CalendarDate } from '../../Calendar/hooks/useCalendarDate';
import parseCalendarDate from '../../Calendar/utils/parseCalendarDate';
import formatDatePickerInput from './formatDatePickerInput';

export const toDatePickerInput = (value: CalendarDate) => {
  return formatDatePickerInput(parseCalendarDate(value));
};

export default toDatePickerInput;

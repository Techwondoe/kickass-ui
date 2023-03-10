import { CalendarDate } from '../../calendar/hooks/useCalendarDate';
import parseCalendarDate from '../../calendar/utils/parseCalendarDate';
import formatDatePickerInput from './formatDatePickerInput';

export const toDatePickerInput = (value: CalendarDate) => {
  return formatDatePickerInput(parseCalendarDate(value));
};

export default toDatePickerInput;

import formatCalendarDate from '../../calendar/utils/formatCalendarDate';
import { DatePickerInputValue } from '../components/date-picker-input';
import parseDatePickerInput from './parseDatePickerInput';

const toCalendarDate = (value: DatePickerInputValue) => {
  return formatCalendarDate(parseDatePickerInput(value));
};

export default toCalendarDate;

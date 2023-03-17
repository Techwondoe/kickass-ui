import { format, isValid } from 'date-fns';
import { DATE_PICKER_INPUT_FORMAT } from '../data/constants';
import { DatePickerInputValue } from '../components/date-picker-input';

export const formatDatePickerInput = (d: string | number | Date): DatePickerInputValue => {
  const date = new Date(d);
  if (!isValid(date)) {
    return '';
  }
  return format(date, DATE_PICKER_INPUT_FORMAT);
};

export default formatDatePickerInput;

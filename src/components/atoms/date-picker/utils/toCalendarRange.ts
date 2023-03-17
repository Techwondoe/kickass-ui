import { CalendarRange } from '../../calendar/hooks/useCalendarRange';
import formatCalendarDate from '../../calendar/utils/formatCalendarDate';
import isValidCalendarRange from '../../calendar/utils/isValidCalendarRange';
import { DatePickerInputValue } from '../components/date-picker-input';
import parseDatePickerInput from './parseDatePickerInput';

export const toCalendarRange = ({
  from,
  to,
}: {
  from: DatePickerInputValue;
  to: DatePickerInputValue;
}): CalendarRange => {
  const fromDate = parseDatePickerInput(from);
  const toDate = parseDatePickerInput(to);
  if (
    isValidCalendarRange({
      from: formatCalendarDate(fromDate),
      to: formatCalendarDate(toDate),
    })
  ) {
    return {
      from: formatCalendarDate(fromDate),
      to: formatCalendarDate(toDate),
    };
  }
  return { from: '', to: '' };
};

export default toCalendarRange;

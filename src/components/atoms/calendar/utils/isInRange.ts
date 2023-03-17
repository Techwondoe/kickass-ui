import { isValid, isWithinInterval } from 'date-fns';
import { CalendarDate } from '../hooks/useCalendarDate';
import { CalendarRange } from '../hooks/useCalendarRange';
import parseCalendarDate from './parseCalendarDate';

export const isInRange = (calDate: CalendarDate, calRange: CalendarRange) => {
  if (!calRange.from || !calRange.to || !calDate) {
    return false;
  }
  const date = parseCalendarDate(calDate);
  const start = parseCalendarDate(calRange.from);
  const end = parseCalendarDate(calRange.to);
  return isValid(date) && isValid(end) && isValid(start)
    ? isWithinInterval(date, { start, end })
    : false;
};

export default isInRange;

import { isBefore, isSameDay } from 'date-fns';
import { CalendarRange } from '../hooks/useCalendarRange';
import parseCalendarDate from './parseCalendarDate';

const isValidCalendarRange = (range: CalendarRange) => {
  const { from, to } = range;
  const fromDate = parseCalendarDate(from);
  const toDate = parseCalendarDate(to);
  return isSameDay(fromDate, toDate) || isBefore(fromDate, toDate);
};

export default isValidCalendarRange;

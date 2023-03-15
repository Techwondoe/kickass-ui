import {
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  getMonth,
  getWeek,
  getYear,
  lastDayOfMonth,
  lastDayOfWeek,
} from 'date-fns';

export interface GeneratedCalendarMonth {
  month: number;
  name: string;
  shortName: string;
  weeks: GeneratedCalendarWeek[];
}

export interface GeneratedCalendarWeek {
  days: GeneratedCalendarDay[];
  week: number;
}

export interface GeneratedCalendarDay {
  date: number;
  day: number;
  dayName: string;
  dayShortName: string;
  iso: string;
}

export const generateCalendarMonth = (
  year: number = getYear(new Date()),
  month: number = getMonth(new Date()) + 1
): GeneratedCalendarMonth => {
  const monthIndex = month - 1;
  const monthStarting = new Date(year, monthIndex, 1);
  const monthEnding = lastDayOfMonth(monthStarting);
  return {
    month,
    name: '',
    shortName: '',
    weeks: eachWeekOfInterval(
      {
        start: monthStarting,
        end: monthEnding,
      },
      { weekStartsOn: 1 }
    ).map((weekStarting) => {
      const weekEnding = lastDayOfWeek(weekStarting, {
        weekStartsOn: 1,
      });
      return {
        week: getWeek(weekStarting),
        days: eachDayOfInterval({
          start: weekStarting,
          end: weekEnding,
        }).map((date) => ({
          date: date.getDate(),
          day: date.getDay(),
          dayName: format(date, 'EEEE'),
          dayShortName: format(date, 'EEEEEE'),
          iso: date.toISOString(),
        })),
      };
    }),
  };
};

export default generateCalendarMonth;

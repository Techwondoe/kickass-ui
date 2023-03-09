import { differenceInDays, isSameDay, isToday } from "date-fns";
import { CalendarRangeName, calendarRanges } from "../data/calendarRanges";
import { CalendarRange } from "../hooks/useCalendarRange";
import parseCalendarDate from "./parseCalendarDate";

export const findDateRangeName = (range: CalendarRange): CalendarRangeName => {
    const { from, to } = range;
    const fromDate = parseCalendarDate(from);
    const toDate = parseCalendarDate(to);
    const diffInDays = differenceInDays(toDate, fromDate) + 1;
    if (isSameDay(fromDate, new Date(0)) && isSameDay(toDate, new Date())) {
        return "allTime";
    }
    const time = isToday(fromDate)
        ? "present"
        : isToday(toDate)
        ? "past"
        : "unknown";
    const name = calendarRanges.find(
        range => range.time === time && range.days === diffInDays
    );
    return (name?.id as CalendarRangeName) ?? "custom";
};

export default findDateRangeName;

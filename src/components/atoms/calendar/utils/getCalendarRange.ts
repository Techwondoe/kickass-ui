import { subDays } from "date-fns";
import { calendarRangeMap, CalendarRangeName } from "../data/calendarRanges";
import { CalendarRange } from "../hooks/useCalendarRange";
import formatCalendarDate from "./formatCalendarDate";

export const getCalendarRange = (id: CalendarRangeName): CalendarRange => {
    if (!id || id === "custom") {
        return { from: "", to: "" };
    }
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = subDays(today, 1);
    if (id === "allTime") {
        return {
            from: formatCalendarDate(new Date(0)),
            to: formatCalendarDate(today),
        };
    } else if (id === "yesterday") {
        return {
            from: formatCalendarDate(yesterday),
            to: formatCalendarDate(yesterday),
        };
    }
    const { time, days } = calendarRangeMap[id];
    const diffInMs = (days - 1) * 24 * 60 * 60 * 1000;
    const before = new Date(now.getTime() - diffInMs);
    const after = new Date(now.getTime() + diffInMs);
    const processedBefore = new Date(
        before.getFullYear(),
        before.getMonth(),
        before.getDate()
    );
    const processedAfter = new Date(
        after.getFullYear(),
        after.getMonth(),
        after.getDate()
    );
    const processedNow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    return time === "past"
        ? {
              from: formatCalendarDate(processedBefore),
              to: formatCalendarDate(processedNow),
          }
        : {
              from: formatCalendarDate(processedNow),
              to: formatCalendarDate(processedAfter),
          };
};

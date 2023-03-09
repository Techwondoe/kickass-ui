export const calendarRangeMap = {
    today: {
        id: "today",
        title: "Today",
        days: 1,
        unit: "day",
        time: "present",
    },
    yesterday: {
        id: "yesterday",
        title: "Yesterday",
        days: 1,
        unit: "day",
        time: "past",
    },
    thisWeek: {
        id: "thisWeek",
        title: "This Week",
        days: 7,
        unit: "week",
        time: "present",
    },
    lastWeek: {
        id: "lastWeek",
        title: "Last Week",
        days: 7,
        unit: "week",
        time: "past",
    },
    thisMonth: {
        id: "thisMonth",
        title: "This Month",
        days: 30,
        unit: "month",
        time: "present",
    },
    lastMonth: {
        id: "lastMonth",
        title: "Last Month",
        days: 30,
        unit: "month",
        time: "past",
    },
    thisQuarter: {
        id: "thisQuarter",
        title: "This Quarter",
        days: 30 * 3,
        unit: "quarter",
        time: "present",
    },
    lastQuarter: {
        id: "lastQuarter",
        title: "Last Quarter",
        days: 30 * 3,
        unit: "quarter",
        time: "past",
    },
    thisYear: {
        id: "thisYear",
        title: "This Year",
        days: 365,
        unit: "year",
        time: "present",
    },
    lastYear: {
        id: "lastYear",
        title: "Last Year",
        days: 365,
        unit: "year",
        time: "past",
    },
    allTime: {
        id: "allTime",
        title: "All Time",
        days: 0,
        unit: "all time",
        time: "unknown",
    },
    custom: {
        id: "custom",
        title: "Custom",
        days: 0,
        unit: "custom",
        time: "unknown",
    },
};

export type CalendarRangeName = keyof typeof calendarRangeMap;

export const calendarRanges = Object.values(calendarRangeMap);

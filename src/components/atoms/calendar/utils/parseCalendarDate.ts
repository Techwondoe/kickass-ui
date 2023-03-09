import { parse } from "date-fns";
import { CALENDAR_DATE_FORMAT } from "../data/constants";

export const parseCalendarDate = (value: string) => {
    return parse(value, CALENDAR_DATE_FORMAT, new Date());
};

export default parseCalendarDate;

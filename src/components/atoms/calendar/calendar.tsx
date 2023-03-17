import React, { FC } from 'react';
import clsx from 'clsx';
import { isSameDay, isToday, max, min } from 'date-fns';
import { Typography } from '../Typography/Typography';
import { UseCalendarProps, useCalendar } from './hooks/useCalendar';
import formatCalendarDate from './utils/formatCalendarDate';
import generateCalendarMonth from './utils/generateCalendarMonth';
import parseCalendarDate from './utils/parseCalendarDate';
import isInRange from './utils/isInRange';

export interface State {
  day: number;
  month: number;
  year: number;
}

export interface CalendarProps extends UseCalendarProps {
  className?: string;
}

export const Calendar: FC<CalendarProps> = ({ className, ...props }) => {
  const { selectedValue, selectionType, setValue, setEmptyValue } = useCalendar(props);
  const calendarMonth = generateCalendarMonth(props.year, props.month);
  const [firstWeek] = calendarMonth.weeks.length ? calendarMonth.weeks : [{ days: [] }];
  return (
    <div className={`flex flex-col gap-1 w-fit h-fit ${className}`}>
      <div className="flex flex-1">
        {firstWeek.days.map(({ dayShortName }) => {
          return (
            <div key={dayShortName} className="flex-1 flex items-center justify-center w-10 h-10">
              <Typography size="sm" color="gray-700">
                {dayShortName}
              </Typography>
            </div>
          );
        })}
      </div>
      {calendarMonth.weeks.map(({ days }, index) => {
        return (
          <div className="flex flex-1" key={index}>
            {days.map(({ date, iso }, index) => {
              const dateObj = new Date(iso);
              const dateValue = formatCalendarDate(dateObj);
              const isWithinMonth = dateObj.getMonth() + 1 === calendarMonth.month;
              const isRangeType = selectionType === 'range' && typeof selectedValue !== 'string';
              const isSingleType = selectionType === 'single' && typeof selectedValue === 'string';
              const isSingleAndSelected =
                isSingleType &&
                selectedValue &&
                isSameDay(dateObj, parseCalendarDate(selectedValue));
              const isSelected = isRangeType
                ? isInRange(formatCalendarDate(dateObj), selectedValue)
                : isSingleAndSelected;
              let isSelectionLeftEnd = false;
              let isSelectionRightEnd = false;
              if (isSelected && isRangeType) {
                isSelectionLeftEnd = isSameDay(dateObj, parseCalendarDate(selectedValue.from));
                isSelectionRightEnd = isSameDay(dateObj, parseCalendarDate(selectedValue.to));
              }
              const isSelectionEnd = isSelectionLeftEnd || isSelectionRightEnd;
              const isTheDateToday = isToday(dateObj);
              const onClick = () => {
                if (!isWithinMonth) {
                  return;
                }
                if (isRangeType) {
                  if (!selectedValue) {
                    setValue({
                      from: dateValue,
                      to: dateValue,
                    });
                    return;
                  }
                  const { from, to } = selectedValue;
                  const fromDate = parseCalendarDate(from);
                  const toDate = parseCalendarDate(to);
                  if (!isSameDay(fromDate, toDate)) {
                    setValue({
                      from: dateValue,
                      to: dateValue,
                    });
                  } else if (isSameDay(fromDate, dateObj)) {
                    setEmptyValue();
                  } else {
                    setValue({
                      from: formatCalendarDate(min([dateObj, fromDate])),
                      to: formatCalendarDate(max([dateObj, toDate])),
                    });
                  }
                } else {
                  setValue(dateValue);
                }
              };
              return (
                <div
                  key={iso}
                  className={clsx(
                    `flex-1 w-10 h-10`,
                    isSelected && {
                      'bg-gray-100': true,
                      'rounded-l-full': isSingleAndSelected || isSelectionLeftEnd || index === 0,
                      'rounded-r-full': isSingleAndSelected || isSelectionRightEnd || index === 6,
                    }
                  )}>
                  <div
                    className={clsx(
                      `w-full h-full flex items-center justify-center cursor-pointer rounded-full`,
                      isSelected
                        ? isSelectionEnd || isSingleAndSelected
                          ? 'bg-primary-600'
                          : 'bg-primary-100'
                        : clsx('hover:bg-gray-100', isTheDateToday && 'bg-gray-100')
                    )}
                    onClick={onClick}>
                    <Typography
                      size="sm"
                      color={
                        isSingleAndSelected || isSelectionEnd
                          ? 'white'
                          : isWithinMonth
                          ? 'gray-700'
                          : 'gray-500'
                      }>
                      {date}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

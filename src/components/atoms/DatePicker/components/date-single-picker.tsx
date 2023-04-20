import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../Button/Button';
import { Calendar } from '../../calendar/calendar';
import CalendarHeader from '../../calendar/components/calendar-header';
import useCalendarDate, { CalendarDate } from '../../calendar/hooks/useCalendarDate';
import { Typography } from '../../Typography/Typography';
import DatePickerInput from './date-picker-input';
import formatDatePickerInput from '../utils/formatDatePickerInput';
import isValidDatePickerInput from '../utils/isValidDatePickerInput';
import toCalendarDate from '../utils/toCalendarDate';
import toDatePickerInput from '../utils/toDatePickerInput';
import formatCalendarDate from '../../calendar/utils/formatCalendarDate';
import isValidCalendarDate from '../../calendar/utils/isValidCalendarDate';

export interface DatePickerProps {
  defaultValue?: CalendarDate;
  hideActions?: boolean;
  onApply?: (value: CalendarDate) => void;
  onCancel?: () => void;
  className?:string
}

export const DateSinglePicker: FC<Omit<DatePickerProps, 'type' | 'hidePresetRanges'>> = ({
  onApply,
  onCancel,
  defaultValue,
  hideActions = false,
  className
}) => {
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      inputText: defaultValue !== undefined ? toDatePickerInput(defaultValue) : '',
    },
  });
  const calendarHeaderDate = useCalendarDate({
    defaultValue:
      defaultValue && isValidCalendarDate(defaultValue)
        ? defaultValue
        : formatCalendarDate(new Date()),
  });

  return (
    <Controller
      name="inputText"
      control={form.control}
      rules={{
        required: 'Required',
        validate: (value) => {
          if (!isValidDatePickerInput(value)) {
            return 'Invalid date format';
          }
        },
      }}
      render={({ field, formState }) => (
        <div className={`w-fit bg-white border border-gray-100 rounded-lg ${className}`}>
          <div className="w-[328px] flex flex-col gap-3 px-6 py-5">
            <CalendarHeader
              value={calendarHeaderDate.value}
              onNext={calendarHeaderDate.setValue}
              onPrevious={calendarHeaderDate.setValue}
            />
            <div className="flex flex-row items-center gap-3">
              <div className="flex-1 flex flex-col">
                <DatePickerInput
                  className="w-full"
                  hasError={!!formState.errors.inputText?.message}
                  value={field.value}
                  onChange={(inputValue) => {
                    if (isValidDatePickerInput(inputValue)) {
                      calendarHeaderDate.setValue(toCalendarDate(inputValue));
                    }
                    field.onChange(inputValue);
                  }}
                />
                {formState.errors.inputText?.message && (
                  <div className="p-1">
                    <Typography size="xs" color="error-700">
                      {formState.errors.inputText?.message}
                    </Typography>
                  </div>
                )}
              </div>
              <Button
                variant="outlined"
                color="gray"
                size="lg"
                label="Today"
                onClick={() => {
                  const today = new Date();
                  calendarHeaderDate.setDate(today);
                  field.onChange(formatDatePickerInput(today));
                }}
              />
            </div>
            <Calendar
              value={toCalendarDate(field.value)}
              onChange={(value) => {
                field.onChange(toDatePickerInput(typeof value === 'string' ? value : ''));
              }}
              {...(calendarHeaderDate.date && {
                month: calendarHeaderDate.date.getMonth() + 1,
                year: calendarHeaderDate.date.getFullYear(),
              })}
            />
          </div>
          {!hideActions && (
            <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-t border-gray-200">
              <Button
                label="Cancel"
                variant="outlined"
                color="gray"
                size="lg"
                className="flex-1"
                onClick={() => onCancel?.()}
              />
              <Button
                label="Apply"
                color="primary"
                disabled={!formState.isValid}
                size="lg"
                className="flex-1"
                onClick={() => onApply?.(toCalendarDate(field.value))}
              />
            </div>
          )}
        </div>
      )}
    />
  );
};

export default DateSinglePicker;

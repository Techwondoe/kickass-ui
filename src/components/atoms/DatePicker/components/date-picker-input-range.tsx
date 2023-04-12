import React, { FC } from 'react';
import { Typography } from '../../Typography/Typography';
import DatePickerInput, { DatePickerInputProps } from './date-picker-input';

export interface DatePickerInputRangeProps {
  className?: string;
  error?: string;
  fromInputProps: DatePickerInputProps;
  toInputProps: DatePickerInputProps;
}

export const DatePickerInputRange: FC<DatePickerInputRangeProps> = ({
  fromInputProps,
  toInputProps,
  error = '',
  className = '',
}) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <DatePickerInput
          {...fromInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
        <Typography color="gray-500" className="mx-3">
          -
        </Typography>
        <DatePickerInput
          {...toInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
      </div>
      {error && (
        <div className="p-1">
          <Typography size="xs" color="error-700">
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DatePickerInputRange;

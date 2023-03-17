import React, { FC } from 'react';
import { CalendarValue } from '../calendar/hooks/useCalendar';
import DateRangePicker from './components/date-range-picker';
import DateSinglePicker from './components/date-single-picker';

export interface DatePickerProps {
  defaultValue?: CalendarValue;
  hideActions?: boolean;
  hidePresetRanges?: boolean;
  onApply?: (value: CalendarValue) => void;
  onCancel?: () => void;
  type?: 'single' | 'range';
}

export const DatePicker: FC<DatePickerProps> = ({
  type = 'single',
  hideActions = false,
  hidePresetRanges = false,
  onApply,
  onCancel,
  defaultValue,
}) => {
  return type === 'range' ? (
    <DateRangePicker
      hidePresetRanges={hidePresetRanges}
      hideActions={hideActions}
      onApply={onApply}
      onCancel={onCancel}
      defaultValue={typeof defaultValue !== 'string' ? defaultValue : undefined}
    />
  ) : (
    <DateSinglePicker
      hideActions={hideActions}
      onApply={onApply}
      onCancel={onCancel}
      defaultValue={typeof defaultValue === 'string' ? defaultValue : undefined}
    />
  );
};

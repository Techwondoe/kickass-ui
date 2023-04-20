import React, { FC } from 'react';
import DateRangePicker from './components/date-range-picker';
import DateSinglePicker from './components/date-single-picker';
import { DatePickerProps } from './DatePicker.types'

export const DatePicker: FC<DatePickerProps> = ({
  type = 'single',
  hideActions = false,
  hidePresetRanges = false,
  onApply,
  onCancel,
  defaultValue,
  className=''
}) => {
  return type === 'range' ? (
    <DateRangePicker
      hidePresetRanges={hidePresetRanges}
      hideActions={hideActions}
      onApply={onApply}
      onCancel={onCancel}
      className={className}
      defaultValue={typeof defaultValue !== 'string' ? defaultValue : undefined}
    />
  ) : (
    <DateSinglePicker
      hideActions={hideActions}
      onApply={onApply}
        onCancel={onCancel}
        className={className}
      defaultValue={typeof defaultValue === 'string' ? defaultValue : undefined}
    />
  );
};

import React, { FC, useState } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { CalendarValue } from '../calendar/hooks/useCalendar';
import {DatePicker, DatePickerProps } from '../date-picker/date-picker';
import toDatePickerInput from '../date-picker/utils/toDatePickerInput';
import { Dropdown } from '../Dropdown/dropdown';

export interface DatePickerDropdownProps {
  buttonColor?: ButtonProps['color'];
  buttonSelected?: boolean;
  buttonVariant?: ButtonProps['variant'];
  hidePresetRanges?: DatePickerProps['hidePresetRanges'];
  onChange?: (value: CalendarValue) => void;
  type?: DatePickerProps['type'];
  value?: CalendarValue;
}

export const DatePickerDropdown: FC<DatePickerDropdownProps> = ({
  type = 'single',
  value: valueProp,
  buttonSelected,
  onChange,
  buttonColor,
  buttonVariant,
  hidePresetRanges = false,
}) => {
  const [internalValue, setInternalValue] = useState<CalendarValue>(
    type === 'single' ? '' : { from: '', to: '' }
  );
  const [openPanel, setOpenPanel] = useState(false);
  const value = valueProp ?? internalValue;
  const setValue = (v: CalendarValue) => {
    if (valueProp === undefined) {
      setInternalValue(v);
    }
    onChange?.(v);
  };
  let buttonLabel = type === 'range' ? 'Select Dates' : 'Select Date';
  if (typeof value === 'string' && value) {
    buttonLabel = toDatePickerInput(value);
  } else if (typeof value !== 'string' && value.from && value.to) {
    buttonLabel = `${toDatePickerInput(value.from)} - ${toDatePickerInput(value.to)}`;
  }
  return (
    <Dropdown onChange={(openStatus) => setOpenPanel(openStatus)} open={openPanel}>
      <Dropdown.Button>
        <Button
          label={buttonLabel}
          color={buttonColor}
          variant={buttonVariant}
          selected={buttonSelected ?? !!value}
          icon="calendar"
        />
      </Dropdown.Button>
      <Dropdown.Panel>
        {openPanel && (
          <div className="my-2">
            <DatePicker
              type={type}
              onApply={(v) => {
                setValue(v);
                setOpenPanel(false);
              }}
              onCancel={() => setOpenPanel(false)}
              hidePresetRanges={hidePresetRanges}
              defaultValue={value}
            />
          </div>
        )}
      </Dropdown.Panel>
    </Dropdown>
  );
};


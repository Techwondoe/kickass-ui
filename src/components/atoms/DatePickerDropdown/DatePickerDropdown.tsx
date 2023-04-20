import React, { FC, useState } from 'react';
import { Button } from '../Button';
import { CalendarValue } from '../calendar/hooks/useCalendar';
import { DatePicker } from '../DatePicker';
import toDatePickerInput from '../DatePicker/utils/toDatePickerInput';
import { Dropdown } from '../Dropdown/dropdown';
import { DatePickerDropdownProps } from './DatePickerDropdown.types';

export const DatePickerDropdown: FC<DatePickerDropdownProps> = ({
  type = 'single',
  value: valueProp,
  buttonSelected,
  onChange,
  buttonColor,
  buttonVariant,
  hidePresetRanges = false,
  className,
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
          className={className}
          variant={buttonVariant}
          selected={buttonSelected ?? !!value}
          icon="calendar"
        />
      </Dropdown.Button>
      <Dropdown.Panel>
        {openPanel && (
          <div className="my-2 ">
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

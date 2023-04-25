import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from '../Dropdown/dropdown';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';
import { SelectInputProps, SelectInputValue } from './SelectInput.types';

export const SelectInputField: FC<SelectInputProps> = ({
  label,
  hint,
  placeholder = '',
  error = '',
  value: valueProp,
  disabled = false,
  onChange,
  renderItem = () => null,
  renderSelectedItem = renderItem,
  items = [],
  fullWidth = false,
  chevronLeft = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState<SelectInputValue | null>(null);
  const [openPanel, setOpenPanel] = useState(false);
  const value = valueProp ?? internalValue;
  const setValue = (v: SelectInputValue) => {
    if (valueProp === undefined) {
      setInternalValue(v);
    }
    onChange?.(v);
  };
  const helperText = error || hint;

  return (
    <div className="flex flex-col gap-1.5">
      <Typography size="sm" color="gray-700">
        {label}
      </Typography>
      <Dropdown open={openPanel} fullWidth={fullWidth} onChange={(value) => setOpenPanel(value)}>
        <Dropdown.Button>
          <div
            className={clsx(
              'h-10 px-3 py-2.5 flex items-center gap-3 cursor-pointer rounded-lg border',
              error
                ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
                : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
              disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
              fullWidth ? 'w-full' : 'w-80',
              className
            )}
            onClick={() => setOpenPanel((prev) => !prev)}>
            {chevronLeft && (
              <Icon name={openPanel ? 'chevron-up' : 'chevron-down'} size={16} color="gray-500" />
            )}
            <div className="grow">
              {value ? (
                renderSelectedItem(value)
              ) : (
                <Typography color="gray-500">{placeholder}</Typography>
              )}
            </div>
            {!chevronLeft && (
              <Icon name={openPanel ? 'chevron-up' : 'chevron-down'} size={16} color="gray-500" />
            )}
          </div>
        </Dropdown.Button>
        <Dropdown.Panel>
          <div
            className={clsx(
              `my-1 bg-white border border-gray-100 shadow-lg rounded-lg`,
              fullWidth ? 'w-full' : 'w-80'
            )}>
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="px-3 py-2 flex items-center hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setValue(item);
                    setOpenPanel(false);
                  }}>
                  <div className="grow">{renderItem(item)}</div>
                  {value && item.id === value.id && (
                    <Icon name="check" color="primary-600" size={20} />
                  )}
                </div>
              );
            })}
          </div>
        </Dropdown.Panel>
      </Dropdown>
      {helperText && (
        <Typography size="sm" color={error ? 'error-500' : 'gray-500'}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from '../Dropdown/dropdown';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';

interface SearchInputValue {
  [key: string]: string;
  id: string;
}

export interface SearchInputProps<Value = SearchInputValue> {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  items?: Value[];
  label?: string;
  onChange?: (value: Value | null) => void;
  placeholder?: string;
  renderItem?: (value: Value) => React.ReactNode;
  renderSelectedItem?: (value: Value) => React.ReactNode;
  searchKeys?: [keyof Value];
  value?: Value;
}

export const SearchInputField: FC<SearchInputProps> = ({
  label,
  placeholder = '',
  hint,
  error = '',
  value: valueProp,
  disabled = false,
  onChange,
  renderItem = () => null,
  renderSelectedItem = renderItem,
  items = [],
  searchKeys = [],
  fullWidth = false,
}) => {
  const [search, setSearch] = useState('');
  const [internalValue, setInternalValue] = useState<SearchInputValue | null>(null);
  const [openPanel, setOpenPanel] = useState(false);
  const value = valueProp ?? internalValue;
  const setValue = (v: SearchInputValue | null) => {
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
      <Dropdown fullWidth={fullWidth} open={openPanel && !disabled}>
        <Dropdown.Button>
          <div
            className={clsx(
              'h-10 px-3 py-2.5 flex items-center rounded-lg border ',
              error
                ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
                : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
              disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
              fullWidth ? 'w-full' : 'w-80'
            )}
            onClick={() => setOpenPanel((prev) => !prev)}>
            <div className="grow flex items-center">
              {value ? (
                renderSelectedItem(value)
              ) : (
                <input
                  className={clsx(
                    `grow text-t-md text-inter placeholder:text-gray-500 border-0 outline-0 focus-visible:outline-0`,

                    disabled ? 'text-gray-500 bg-gray-50' : 'text-gray-900 bg-white'
                  )}
                  placeholder={placeholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
            </div>
            {value && (
              <Icon
                name="x-close"
                size={16}
                color="gray-500"
                className="cursor-pointer"
                onClick={() => setValue(null)}
              />
            )}
          </div>
        </Dropdown.Button>
        <Dropdown.Panel>
          <div
            className={clsx(
              'my-1 bg-white border border-gray-100 shadow-lg rounded-lg',
              fullWidth ? 'w-full' : 'w-80'
            )}>
            {items
              .filter((item) => {
                if (searchKeys.length === 0) {
                  return JSON.stringify(item).toLowerCase().includes(search);
                }
                return (
                  searchKeys
                    .map((field) =>
                      item[field] && typeof item[field] === 'string'
                        ? item[field].toLowerCase().includes(search)
                        : false
                    )
                    .find((b) => b) ?? false
                );
              })
              .map((item, index) => {
                return (
                  <div
                    key={index}
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

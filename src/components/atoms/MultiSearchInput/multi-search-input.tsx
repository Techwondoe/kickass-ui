import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from '../Dropdown/dropdown';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';

interface MultiSearchInputValue {
  [key: string]: string;
  id: string;
}

interface MultiSearchInputItemControls {
  select: () => void;
  toggle: () => void;
  unselect: () => void;
}

export interface MultiSearchInputProps<Value = MultiSearchInputValue> {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  items?: Value[];
  label?: string;
  onChange?: (value: Value[] | null) => void;
  placeholder?: string;
  renderItem?: (value: Value, controls: MultiSearchInputItemControls) => React.ReactNode;
  renderSelectedItem?: (value: Value, controls: MultiSearchInputItemControls) => React.ReactNode;
  searchKeys?: [keyof Value];
  value?: Value[];
}

export const MultiSearchInputField: FC<MultiSearchInputProps> = ({
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
  const [internalValue, setInternalValue] = useState<MultiSearchInputValue[]>([]);
  const [openPanel, setOpenPanel] = useState(false);
  const value = valueProp ?? internalValue;
  const setValue = (v: MultiSearchInputValue[]) => {
    if (valueProp === undefined) {
      setInternalValue(v);
    }
    onChange?.(v);
  };
  const addValueItem = (v: MultiSearchInputValue) => {
    if (value.findIndex(({ id }) => id === v.id) === -1) {
      setValue([...value, v]);
      setSearch('');
    }
  };
  const removeValueItem = (v: MultiSearchInputValue) => {
    if (value.findIndex(({ id }) => id === v.id) !== -1) {
      setValue(value.filter(({ id }) => id !== v.id));
    }
  };
  const toggleValueItem = (v: MultiSearchInputValue) => {
    if (value.findIndex(({ id }) => id === v.id) === -1) {
      setValue([...value, v]);
      setSearch('');
    } else {
      setValue(value.filter(({ id }) => id !== v.id));
    }
  };
  const getItemControls = (item: MultiSearchInputValue) => ({
    select: () => addValueItem(item),
    unselect: () => removeValueItem(item),
    toggle: () => toggleValueItem(item),
  });
  const helperText = error || hint;

  return (
    <div className="flex flex-col gap-1.5">
      <Typography size="sm" color="gray-700">
        {label}
      </Typography>
      <Dropdown
        open={openPanel && !disabled}
        fullWidth={fullWidth}
        onChange={(open) => {
          if (openPanel !== open) {
            setOpenPanel(open);
          }
        }}>
        <Dropdown.Button>
          <div
            className={clsx(
              'px-3 py-2 flex rounded-lg border',
              error
                ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
                : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
              disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
              fullWidth ? 'w-full' : 'w-80'
            )}>
            <div className="grow shrink flex items-center flex-wrap gap-1">
              {value &&
                value.map((selectedItem, index) => (
                  <div className="w-fit" key={index}>
                    {renderSelectedItem(selectedItem, getItemControls(selectedItem))}
                  </div>
                ))}
              <input
                className={clsx(
                  'w-10 grow shrink text-t-md text-inter placeholder:text-gray-500 border-0 outline-0 focus-visible:outline-0',
                  disabled ? 'text-gray-500 bg-gray-50' : 'text-gray-900 bg-white'
                )}
                placeholder={!value?.length ? placeholder : ''}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {value.length > 0 && (
              <div className="h-10 flex items-center">
                <Icon
                  name="x-close"
                  size={16}
                  color="gray-500"
                  className="cursor-pointer"
                  onClick={() => setValue([])}
                />
              </div>
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
                const isSelected = value ? value.findIndex((i) => i.id === item.id) !== -1 : false;
                return (
                  <div
                    key={index}
                    className="px-3 py-2 flex items-center hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setValue(
                        value
                          ? value.findIndex((i) => i.id === item.id) !== -1
                            ? value.filter((i) => i.id !== item.id)
                            : [...value, item]
                          : [item]
                      );
                    }}>
                    <div className="grow shrink">{renderItem(item, getItemControls(item))}</div>
                    {isSelected && <Icon name="check" color="primary-600" size={20} />}
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

export default MultiSearchInputField;

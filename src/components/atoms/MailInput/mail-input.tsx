import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';

export interface MailInputProps {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const MailInputField: FC<MailInputProps> = ({
  label,
  placeholder = '',
  hint,
  error = '',
  value: valueProp,
  disabled = false,
  onChange,
  fullWidth = false,
}) => {
  const [internalValue, setInternalValue] = useState('');

  const value = valueProp ?? internalValue;

  const setValue = (v: string) => {
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
      <div
        className={clsx(
          'h-10 px-3 py-2 flex items-center gap-2 rounded-lg border',
          error
            ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
            : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
          disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
          fullWidth ? 'w-full' : 'w-80'
        )}>
        <Icon name="mail-01" color="gray-500" size={20} />
        <input
          className={clsx(
            'grow text-t-md text-inter placeholder:text-gray-500 border-0 outline-0 focus-visible:outline-0',
            disabled ? 'text-gray-500 bg-gray-50' : 'text-gray-900 bg-white'
          )}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {helperText && (
          <Icon
            name={error ? 'alert-circle' : 'help-circle'}
            size={16}
            color={error ? 'error-500' : 'gray-400'}
          />
        )}
      </div>
      {helperText && (
        <Typography size="sm" color={error ? 'error-500' : 'gray-500'}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

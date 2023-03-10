import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon';
import styles from './password-input.module.css';

export interface PasswordInputProps {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hasError?: boolean;
  hint?: string;
  label?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const PasswordInputField: FC<PasswordInputProps> = ({
  label,
  placeholder = '',
  hint,
  error = '',
  hasError = !!error,
  value: valueProp,
  disabled = false,
  onChange,
  onBlur,
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
          hasError
            ? 'border-error-300 focus-within:ring-4 focus-within:ring-error-100'
            : 'border-gray-300 focus-within:ring-4 focus-within:ring-primary-100',
          disabled ? 'bg-gray-50 pointer-events-none hover:cursor-not-allowed' : 'bg-white',
          fullWidth ? 'w-full' : 'w-80'
        )}>
        <input
          className={clsx(
            'grow text-t-md text-inter placeholder:text-gray-500 border-0 p-0',
            disabled ? 'text-gray-500 bg-gray-50' : 'text-gray-900 bg-white',
            styles['input-no-shadow']
          )}
          placeholder={placeholder}
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
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

export default PasswordInputField;

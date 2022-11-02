import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ColorCodes } from '~/constants/types';
import { TextFieldProps } from './TextField.constants';

/**
 * @param {TextFieldProps} props - The props for the TextField component
 * @returns TextField component
 * @description This component is used to render a TextField which could be a text input, password input, email input, textarea, or select (dropdown)
 * @example <TextField color="primary" />
 */

export function TextField({
  color = ColorCodes.PRIMARY,
  disabled,
  error,
  helperText,
  id,
  label,
  name,
  placeholder,
  type,
  value,
  variant = 'standard',
  size = 'normal',
  fullWidth,
  multiline,
  select,
  options,
  className,
  ...restProps
}: TextFieldProps) {
  const variants = {
    outlined: `border-2 rounded ${
      error ? `border-danger` : `border-secondary hover:border-onSurface focus:border-${color}`
    }`,
    filled: `border-b-2 rounded-t ${
      error
        ? `border-danger bg-danger/20`
        : `border-secondary hover:border-onSurface focus:border-${color} bg-${color}/20`
    }`,
    standard: `border-b-2 ${
      error ? `border-danger` : `border-secondary hover:border-onSurface focus:border-${color}`
    }`,
  };

  const sizes = {
    small: 'h-8 px-2',
    normal: 'h-10 px-4',
  };

  const inputClasses = twMerge(
    `outline-none`,
    fullWidth ? `w-full` : `w-fit`,
    sizes[size],
    variants[variant],
    className
  );

  const textFieldDisplay = React.createElement(
    select ? 'select' : multiline ? 'textarea' : 'input',
    {
      ...restProps,
      className: `${inputClasses}`,
    },
    select
      ? options?.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))
      : null
  );

  return (
    <div className={`flex flex-col ${disabled && 'opacity-50 cursor-not-allowed'}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium ${error ? `text-danger` : `text-secondary`} `}>
          {label}
        </label>
      )}
      {textFieldDisplay}
      {helperText && (
        <p className={`text-sm ${error ? `text-danger` : `text-secondary`}`}>{helperText}</p>
      )}
    </div>
  );
}

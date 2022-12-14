import React from 'react';
import { ColorCodes } from '~/constants/types';

/**
 * @params checked - Radio is checked or not
 * @params color - Border color when checked
 * @params disabled - Radio can be toggled or not
 * @params id - unique id
 * @params name - name attribute for html
 * @params onChange - callback when radio value is changed
 * @params title - Text to be display below radio
 * @params value - Value to determine wether radio is toggled or not
 */
export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  color?: ColorCodes;
  disabled?: boolean;
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  value?: string;
}

export function Radio({
  id,
  title,
  checked,
  color = ColorCodes.PRIMARY,
  name,
  onChange,
  value,
  disabled = false,
  ...restProps
}: RadioProps) {
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <fieldset className="mt-4">
      <legend className="sr-only">Notification method</legend>
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            {...restProps}
            name="notification-method"
            type="radio"
            checked={checked}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`h-4 w-4 bg-secondary border-${color} ${disabledClasses}`}
          />
          <label htmlFor={id} className={`ml-3 block text-sm font-medium ${disabledClasses}`}>
            {title}
          </label>
        </div>
      </div>
    </fieldset>
  );
}

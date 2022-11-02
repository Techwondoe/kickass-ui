import React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
}

const sizes = {
  small: 'w-4 h-4',
  medium: 'w-5 h-5',
  large: 'w-6 h-6',
};

export function Checkbox({
  id,
  name,
  onChange,
  checked,
  label,
  disabled,
  color = 'primary',
  size = 'medium',
}: CheckboxProps) {
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const checkboxClasses = `rounded border-2 border-${color}-500 cursor-pointer ${
    checked && `text-${color}-500 focus:ring-${color}-500`
  } ${disabledClasses} ${sizes[size]}`;

  const labelClasses = `ml-2 cursor-pointer ${disabledClasses}`;

  return (
    <div className="flex items-center cursor-pointer">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={checkboxClasses}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { PrimaryColorType } from '../../../types/colors';
import { Icon } from '../icon';

export interface CheckboxProps {
  checked?: boolean;
  color?: Omit<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  indeterminate?: boolean;
  initiallyChecked?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export function Checkbox({
  name,
  onChange,
  checked: checkedProp,
  initiallyChecked = false,
  indeterminate = false,
  disabled,
  color = 'primary',
  size = 'md',
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(initiallyChecked);
  const ref = useRef<HTMLInputElement>(null);

  const checked = checkedProp ?? internalChecked;
  const setChecked = (value: boolean) => {
    if (checkedProp === undefined) {
      setInternalChecked(value);
    }
    onChange?.(value);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !checked && indeterminate;
    }
  }, [ref, indeterminate, checked]);

  const checkboxClasses = `stroke-gray-300 ${
    disabled
      ? 'fill-gray-100'
      : checked || indeterminate
      ? `stroke-${color}-600 fill-${color}-50 hover:fill-${color}-100 focus:ring-4 focus:ring-${color}-100`
      : `fill-white hover:fill-${color}-100 hover:stroke-${color}-600 focus:ring-4 focus:ring-${color}-100`
  } rounded-md cursor-pointer ${sizes[size]}`;

  return (
    <div
      className={`inline-block cursor-pointer w-fit h-fit`}
      onClick={() => {
        if (ref.current && !disabled) {
          if (indeterminate) {
            ref.current.indeterminate = false;
            setChecked(false);
          } else {
            setChecked(!checked);
          }
        }
      }}>
      <input
        ref={ref}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="hidden"
      />
      <Icon
        color="gray-300"
        name={checked ? 'check-square' : indeterminate ? 'minus-square' : 'square'}
        className={checkboxClasses}
      />
    </div>
  );
}

// export default Checkbox;

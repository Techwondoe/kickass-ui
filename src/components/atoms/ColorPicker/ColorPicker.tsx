import clsx from 'clsx';
import React, { FC, useState } from 'react';

export interface ColorPickerProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({ value: valueProp, onChange, className }) => {
  const [internalValue, setInternalValue] = useState('#000000');
  const value = valueProp ?? internalValue;
  const setValue = (value: string) => {
    if (valueProp === undefined) {
      setInternalValue(value);
    }
    onChange?.(value);
  };
  return (
    <input
      type="color"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className={clsx(
        'min-w-[48px] min-h-[48px] p-0.5 bg-white border border-gray-200 rounded',
        className
      )}
    />
  );
};

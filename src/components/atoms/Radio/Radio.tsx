import React, { FC } from 'react';
import clsx from 'clsx';
import { ColorType } from '../../../types/colors';

export interface RadioProps {
  checked?: boolean;
  className?: string;
  color?: ColorType;
  name?: string;
  onChange?: () => void;
}

export const Radio: FC<RadioProps> = ({
  name,
  color = 'primary',
  className,
  checked,
  onChange = () => {},
}) => {
  return (
    <input
      type="radio"
      name={name}
      className={clsx(`border border-gray-300 bg-white checked:accent-${color}`, className)}
      checked={checked}
      onChange={onChange}
    />
  );
};

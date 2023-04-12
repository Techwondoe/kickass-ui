import React, { FC } from 'react';
import clsx from 'clsx';
import { RadioProps } from './Radio.types';

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

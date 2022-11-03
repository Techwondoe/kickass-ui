import React, { HTMLAttributes } from 'react';
import { ColorCodes } from '~/constants/types';

export type SliderSizes = 'small' | 'medium' | 'large';

export interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  color?: ColorCodes;
  disabled?: boolean;
  max?: number;
  min?: number;
  size?: SliderSizes;
  step?: number;
}

export function Slider({
  color = ColorCodes.PRIMARY,
  size = 'small',
  step,
  className,
  disabled = false,
  min = 0,
  max,
  //   ref,
  ...restProps
}: SliderProps) {
  const sizes = {
    small: 'w-24 h-1',
    medium: 'w-32 h-2',
    large: 'w-48 h-3',
  };

  return (
    <input
      type="range"
      step={step}
      className={`form-range ${
        sizes[size]
      } p-0 appearance-none rounded bg-${color} focus:outline-none focus:ring-0 focus:shadow-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      min={min}
      max={max}
      {...restProps}
    />
  );
}

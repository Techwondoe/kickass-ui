import React from 'react';
import { ColorCodes } from '~/constants/types';
import { SliderProps, SliderSizes } from './Slider.types';

const sizes = {
  small: 'w-24 h-1',
  medium: 'w-32 h-2',
  large: 'w-48 h-3',
};

export function Slider({
  color = ColorCodes.PRIMARY,
  size = SliderSizes.SMALL,
  step,
  className,
  disabled = false,
  min = 0,
  max,
  ...restProps
}: SliderProps) {
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

import { HTMLAttributes } from 'react';
import { ColorCodes } from '~/constants/types';

export enum SliderSizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  color?: ColorCodes;
  disabled?: boolean;
  max?: number;
  min?: number;
  size?: SliderSizes;
  step?: number;
}

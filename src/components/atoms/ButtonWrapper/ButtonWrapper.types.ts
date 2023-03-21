import { HTMLAttributes } from 'react';
import { PrimaryColorType } from '../../../types/colors';

/**
 * @param children - The content of the button
 * @param className - Override or extend the styles applied to the component
 * @param color - Color of the button. It supports those theme colors that make sense for this component.
 * @param fullWidth - If true, the button will take up the full width of its container.
 * @param shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @param size - Size of the button. It supports those theme sizes that make sense for this component.
 * @param variant - Variant of the button. It supports those theme variants that make sense for this component.
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  className?: string;
  color?: Exclude<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  selected?: boolean;
  shape?: 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'contained' | 'outlined' | 'light';
}
export const sizes = {
  sm: 'px-[7px] py-1',
  md: 'px-2 py-[5px]',
  lg: 'px-[9px] py-[5px]',
  xl: 'px-2.5 py-1.5',
  '2xl': 'px-3.5 py-2',
};

export const shapes = {
  rounded: 'rounded-full',
  square: 'rounded',
};

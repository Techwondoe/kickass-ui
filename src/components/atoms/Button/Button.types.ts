import { HTMLAttributes } from 'react';
import { PrimaryColorType } from '../../../types/colors';
import { IconType } from '../icon';
/**
 * @params EndIcon - The icon to be displayed at the end of the button
 * @params StartIcon - The icon to be displayed at the start of the button
 * @params children - The content of the button
 * @params className - Override or extend the styles applied to the component
 * @params color - Color of the button. It supports those theme colors that make sense for this component.
 * @params fullWidth - If true, the button will take up the full width of its container.
 * @params href - The URL to link to when the button is clicked.
 * @params shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @params size - Size of the button. It supports those theme sizes that make sense for this component.
 * @params variant - Variant of the button. It supports those theme variants that make sense for this component.
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  className?: string;
  color?: Exclude<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  endIcon?: IconType;
  href?: string;
  icon?: IconType;
  label: string;
  online?: boolean;
  selected?: boolean;
  shape?: 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'contained' | 'outlined' | 'light' | 'text' | 'link';
}
export const sizes = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  '2xl': 'btn-2xl',
};
export const shapes = {
  rounded: 'rounded-full',
  square: 'rounded',
};
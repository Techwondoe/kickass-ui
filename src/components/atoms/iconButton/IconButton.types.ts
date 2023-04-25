import { HTMLAttributes } from 'react';
import { PrimaryColorType } from '~/types/colors';
import { IconType } from '../icon/icon-list';

/**
 * @param className - Override or extend the styles applied to the component
 * @param color - Color for the component
 * @param disabled - Whether to disable or not
 * @param href - The URL to link to when the button is clicked.
 * @param icon - The icon to be displayed at the start of the button
 * @param selected - Whether it is selected or not
 * @param shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @param size - Size of the button. It supports those theme sizes that make sense for this component.
 * @param variant - Variant of the button. It supports those theme variants that make sense for this component.
 */
export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  className?: string;
  color?: Exclude<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  href?: string;
  icon: IconType;
  selected?: boolean;
  shape?: 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'contained' | 'outlined' | 'light' | 'text' | 'link';
}
export const sizes = {
  '2xl': 'w-14 h-14',
  lg: 'w-11 h-11',
  md: 'w-10 h-10',
  sm: 'w-9 h-9',
  xl: 'w-12 h-12',
};

export const shapes = {
  rounded: 'rounded-full',
  square: 'rounded',
};

import { ReactNode } from 'react';
import { ColorVariantType } from '~/types/colors';

/**
 * Defines the props of the component.
 * @param children - Content of the component.
 * @param className - Override or extend the styles applied to the component.
 * @param color - Color of the component. It supports those theme colors that make sense for this component.
 * @param onClick - Onclick handler for the component
 * @param size - Size of the component
 * @param type - Type of the component
 * @param variant - Component used for the root node. Either a string to use a HTML element or a component.
 * @param weight - Weight to apply to the component.
 */

export type TypographySizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TypographyWeightType = 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyTextType = 'display' | 'text';

export const typographySizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
export const typographyWeights = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];
export interface TypographyProps {
  children: ReactNode;
  className?: string;
  color?: ColorVariantType;
  onClick?: () => void;
  size?: TypographySizeType;
  type?: TypographyTextType;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  weight?: TypographyWeightType;
}

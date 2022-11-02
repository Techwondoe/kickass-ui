import { ReactNode } from 'react';
import { ColorCodes } from '~/constants/types';


export type TypographyAlignments = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TypographyWhitespaces = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';

/**
 * Defines the props of the component.
 * @params id - Id to identify uniquely the component
 * @params children - Content of the component.
 * @params align - Text-align on the component.
 * @params color - Color of the component. It supports those theme colors that make sense for this component.
 * @params variant - Component used for the root node. Either a string to use a HTML element or a component.
 * @params whitespace - White space to apply to the component.
 * @params className - Override or extend the styles applied to the component.
 */

export interface TypographyProps {
  align?: TypographyAlignments;
  children: ReactNode;
  className?: string;
  color?: ColorCodes;
  id?: string;
  variant?: TypographyVariants;
  whitespace?: TypographyWhitespaces;
}

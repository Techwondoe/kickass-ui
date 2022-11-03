import { ReactNode } from 'react';
import { ColorCodes } from '~/constants/types';

export enum TypographyAlignments {
  CENTER = 'center',
  INHERIT = 'inherit',
  JUSTIFY = 'justify',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum TypographyVariants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

export enum TypographyWhitespaces {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_LINE = 'pre-line',
  PRE_WRAP = 'pre-wrap',
}

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

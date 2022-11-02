import React, { HTMLAttributes, ReactNode } from 'react';
import { ColorCodes } from '~/constants/types';

export type ButtonVariants = 'contained' | 'outlined' | 'text';

export type ButtonSizes = 'small' | 'medium' | 'large';

export type ButtonShapes = 'rounded' | 'square';

/**
 * Defines the props of the component
 * @params EndIcon - The icon to be displayed at the end of the button
 * @params StartIcon - The icon to be displayed at the start of the button
 * @params children - The content of the button
 * @params className - Overrride or extend the styles applied to the component
 * @params color - Color of the button. It supports those theme colors that make sense for this component.
 * @params fullWidth - If true, the button will take up the full width of its container.
 * @params href - The URL to link to when the button is clicked.
 * @params shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @params size - Size of the button. It supports those theme sizes that make sense for this component.
 * @params variant - Variant of the button. It supports those theme variants that make sense for this component.
 */

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  EndIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  StartIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: ReactNode;
  className?: string;
  color?: ColorCodes;
  fullWidth?: boolean;
  href?: string;
  shape?: ButtonShapes;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

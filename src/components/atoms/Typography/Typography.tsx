import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ColorCodes } from '~/constants/types';
import {
  TypographyAlignments,
  TypographyProps,
  TypographyVariants,
  TypographyWhitespaces,
} from './Typography.types';

/**
 * @param {TypographyProps} props
 * @returns Typography component
 * @description This component is used to render text
 * @example <Typography variant="h1">Heading 1</Typography>
 */
export function Typography({
  children,
  id,
  align = TypographyAlignments.CENTER,
  color = ColorCodes.PRIMARY,
  variant = TypographyVariants.H1,
  className = '',
  whitespace = TypographyWhitespaces.NORMAL,
  ...restProps
}: TypographyProps) {
  const classes = twMerge(`text-${color}`, whitespace ? `whitespace-${whitespace}` : '', className);

  return React.createElement(
    variant,
    {
      id,
      ...restProps,
      className: classes,
      align,
    },
    children
  );
}

export default Typography;

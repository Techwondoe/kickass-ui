import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ColorCodes } from '~/constants/types';
import { TypographyProps } from './Typography.constants';

/**
 * @param {TypographyProps} props
 * @returns Typography component
 * @description This component is used to render text
 * @example <Typography variant="h1">Heading 1</Typography>
 */

export function Typography({
  children,
  id,
  align = 'center',
  color = ColorCodes.PRIMARY,
  variant = 'h1',
  className = '',
  whitespace = 'normal',
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

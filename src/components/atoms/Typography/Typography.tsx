import React, { ReactNode } from 'react';
import { ColorVariantType } from '../../../types/colors';

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

export type TypographySizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TypographyWeightType = 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyTextType = 'display' | 'text';

const typographySizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const typographyWeights = [
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

const compare = (array: string[], a: string, b: string) => {
  const aIndex = array.findIndex((v) => v === a);
  const bIndex = array.findIndex((v) => v === b);
  return aIndex === bIndex ? 0 : aIndex < bIndex ? -1 : 1;
};
const isGreaterSizeThan = (a: TypographySizeType, b: TypographySizeType) =>
  compare(typographySizes, a, b) === 1;
const isGreaterWeightThan = (a: TypographyWeightType, b: TypographyWeightType) =>
  compare(typographyWeights, a, b) === 1;

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

/**
 * @param {TypographyProps} props
 * @returns Typography component
 * @description This component is used to render text
 * @example <Typography variant="h1">Heading 1</Typography>
 */

export function Typography({
  children,
  color,
  variant = 'h1',
  size = 'md',
  weight = 'normal',
  type = 'text',
  className = '',
  ...restProps
}: TypographyProps) {
  const isMediumOrAboveDisplay = type === 'display' && isGreaterSizeThan(size, 'sm');
  const fontFamily = isMediumOrAboveDisplay ? 'font-eudoxus-sans' : 'font-inter';
  const weightIndex = typographyWeights.findIndex((w) => w === weight);
  const fontWeight =
    isMediumOrAboveDisplay &&
    isGreaterWeightThan(weight, 'medium') &&
    weightIndex !== typographyWeights.length - 1
      ? typographyWeights[weightIndex + 1]
      : weight;
  const classes = `text-${color} text-${
    type === 'display' ? 'd' : 't'
  }-${size} font-${fontWeight} ${fontFamily} ${className}`;

  return React.createElement(
    variant,
    {
      ...restProps,
      className: classes,
    },
    children
  );
}

// export default Typography;

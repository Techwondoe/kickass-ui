import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.constants';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function Button({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  StartIcon,
  EndIcon,
  href,
  shape = 'rounded',
  className = '',
  ...restProps
}: ButtonProps) {
  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const variants = {
    contained: `bg-${color} text-contrast-${color}`,
    outlined: `border border-${color} text-${color} hover:bg-${color}/20`,
    text: `text-${color} hover:bg-${color}/20`,
  };

  const shapes = {
    rounded: 'rounded-full',
    square: 'rounded',
  };

  const classes = twMerge(
    `button-base ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : 'w-fit'} ${
      shapes[shape]
    } ${className}`
  );

  const buttonContent = (
    <>
      {StartIcon && <StartIcon className={`mr-2 ${iconSizes[size]}`} />}
      {children}
      {EndIcon && <EndIcon className={`ml-2 ${iconSizes[size]}`} />}
    </>
  );

  return React.createElement(
    href ? 'a' : 'button',
    {
      ...restProps,
      className: classes,
      href,
    },
    buttonContent
  );
}

/* eslint-disable sort-keys */
import React from 'react';
import { ButtonProps, sizes, shapes } from './ButtonWrapper.types';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function ButtonWrapper({
  variant = 'contained',
  color = 'primary',
  size = 'md',
  shape = 'square',
  className = '',
  disabled = false,
  selected = false,
  children,
  ...restProps
}: ButtonProps) {
  const variants = {
    contained: {
      button: `${
        selected ? `bg-${color}-700` : `bg-${color}-600`
      } hover:bg-${color}-700 focus:ring-4 ring-${color}-100 disabled:bg-${color}-200`,
      typo: ``,
      icon: ``,
    },
    outlined: {
      button: `${
        selected ? `bg-${color}-50` : `bg-white`
      } border border-${color}-300 hover:bg-${color}-50 focus:ring-4 ring-${color}-100 disabled:border-${color}-200`,
      typo: ``,
      icon: ``,
    },
    light: {
      button: `${
        selected ? `bg-${color}-100` : `bg-${color}-50`
      } hover:bg-${color}-100 focus:ring-4 ring-${color}-100 disabled:bg-${color}-25`,
      typo: ``,
      icon: ``,
    },
    text: {
      button: `${selected ? `bg-${color}-50` : ``} hover:bg-${color}-50`,
      typo: ``,
      icon: ``,
    },
    link: {
      button: `cursor-pointer`,
      typo: ``,
      icon: ``,
    },
  };

  const classes = `group disabled:cursor-not-allowed ${variants[variant].button} ${shapes[shape]} ${sizes[size]} whitespace-nowrap ${className}`;

  return (
    <button className={classes} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
}

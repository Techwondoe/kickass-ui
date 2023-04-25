/* eslint-disable sort-keys */
import React from 'react';
import { ColorType } from '../../../types/colors';
import { Icon } from '../icon';
import { IconButtonProps, sizes, shapes } from './IconButton.types';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function IconButton({
  variant = 'contained',
  color = 'primary',
  size = 'md',
  icon,
  href,
  shape = 'square',
  className = '',
  disabled = false,
  selected = false,
  ...restProps
}: IconButtonProps) {
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
  const classes = `group flex flex-row items-center justify-center disabled:cursor-not-allowed ${variants[variant].button} ${sizes[size]} ${shapes[shape]} ${className}`;

  const iconClassName =
    variant !== 'contained'
      ? `${
          selected ? `stroke-${color}-800` : ``
        } group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`
      : '';
  const typoColor =
    variant === 'contained' ? 'white' : ((selected ? `${color}-800` : `${color}-700`) as ColorType);
  const iconSize = size === '2xl' ? 24 : 20;

  const children = <Icon name={icon} color={typoColor} size={iconSize} className={iconClassName} />;

  return variant === 'link' ? (
    <a className={classes} href={href} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
}

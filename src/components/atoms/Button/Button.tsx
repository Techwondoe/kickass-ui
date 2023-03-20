/* eslint-disable sort-keys */
import React from 'react';
import clsx from 'clsx';
import { ColorType } from '../../../types/colors';
import { Icon } from '../icon';
import { Typography } from '../Typography/Typography';
import { ButtonProps, sizes, shapes } from './Button.types';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function Button({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'md',
  icon,
  endIcon,
  href,
  shape = 'square',
  className = '',
  disabled = false,
  online = false,
  textAlign = 'center',
  selected = false,
  ...restProps
}: ButtonProps) {
  const variants = {
    contained: {
      button: `${
        selected ? `btn-${color}-700` : `btn-${color}-600`
      } hover:btn-${color}-700 focus:ring-4 ring-${color}-100 disabled:btn-${color}-200`,
      typo: ``,
      icon: ``,
    },
    outlined: {
      button: `${
        selected ? `btn-${color}-50` : `btn-white`
      } border border-${color}-300 hover:btn-${color}-50 focus:ring-4 ring-${color}-100 disabled:border-${color}-200`,
      typo: ``,
      icon: ``,
    },
    light: {
      button: `${
        selected ? `btn-${color}-100` : `btn-${color}-50`
      } hover:btn-${color}-100 focus:ring-4 ring-${color}-100 disabled:btn-${color}-25`,
      typo: ``,
      icon: ``,
    },
    text: {
      button: `${selected ? `btn-${color}-50` : ``} hover:btn-${color}-50`,
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

  const typoClassName =
    variant !== 'contained' ? `group-hover:text-${color}-800 group-disabled:text-${color}-300` : '';
  const iconClassName =
    variant !== 'contained'
      ? `${
          selected ? `stroke-${color}-800` : ``
        } group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`
      : '';
  const typoColor =
    variant === 'contained' ? 'white' : ((selected ? `${color}-800` : `${color}-700`) as ColorType);
  const typoSize = size === '2xl' ? 'lg' : size === 'xl' || size === 'lg' ? 'md' : 'sm';
  const iconSize = size === '2xl' ? 24 : 20;

  const statusDotColor =
    variant === 'contained' ? 'white' : disabled ? `${color}-300` : 'success-500';

  const children = (
    <div
      className={clsx(
        `w-full h-full flex flex-row items-center`,
        size === '2xl' ? 'gap-3' : 'gap-2'
      )}>
      {icon && <Icon name={icon} color={typoColor} size={iconSize} className={iconClassName} />}
      {online && <div className={`w-1.5 h-1.5 bg-${statusDotColor} rounded-full`} />}
      <div className="flex-1">
        <Typography
          color={typoColor}
          className={`${typoClassName} ${
            textAlign === 'left'
              ? 'text-left'
              : textAlign === 'right'
              ? 'text-right'
              : 'text-center'
          }`}
          size={typoSize}>
          {label}
        </Typography>
      </div>
      {endIcon && (
        <Icon name={endIcon} color={typoColor} size={iconSize} className={iconClassName} />
      )}
    </div>
  );

  return variant === 'link' ? (
    <a className={clsx('inline-block w-fit', classes, className)} href={href} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={`${classes} ${className}`} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
}

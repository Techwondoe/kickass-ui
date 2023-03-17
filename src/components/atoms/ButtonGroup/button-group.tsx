import { Button, ButtonProps } from '../Button/Button';
import React from 'react';
export interface ButtonGroupProps
  extends Pick<ButtonProps, 'color' | 'size' | 'variant' | 'icon' | 'endIcon'> {
  className?: string;
  items: Array<Omit<ButtonProps, 'color' | 'size' | 'variant' | 'shape'>>;
  orientation?: 'horizontal' | 'vertical';
}

export function ButtonGroup({
  items,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  endIcon,
  icon,
  className,
  orientation = 'horizontal',
}: ButtonGroupProps) {
  let extraBorder = variant !== 'outlined' ? `border-r focus:border-r-0 border-${color}-700` : '';
  let firstBtnClassName = 'rounded-r-none';
  let midBtnClassName = `rounded-none border-l-0 ${variant === 'outlined' ? 'focus:border-l' : ''}`;
  let lastBtnClassName = `rounded-l-none border-l-0 ${
    variant === 'outlined' ? 'focus:border-l' : ''
  }`;
  let flexDirection = 'flex-row';
  if (orientation === 'vertical') {
    firstBtnClassName = 'rounded-b-none';
    midBtnClassName = `rounded-none border-t-0 ${variant === 'outlined' ? 'focus:border-t' : ''}`;
    lastBtnClassName = `rounded-t-none border-t-0 ${
      variant === 'outlined' ? 'focus:border-t' : ''
    }`;
    flexDirection = 'flex-col';
    extraBorder = variant !== 'outlined' ? `border-b focus:border-b-0 border-${color}-700` : '';
  }
  firstBtnClassName = `${firstBtnClassName} ${extraBorder}`;
  midBtnClassName = `${midBtnClassName} ${extraBorder}`;
  return (
    <div className={`inline-flex ${flexDirection} ${className}`} role="group">
      {items.map((props, index, array) => {
        let btnClassName = '';
        if (array.length > 1) {
          if (index === 0) {
            btnClassName = firstBtnClassName;
          } else if (index === array.length - 1) {
            btnClassName = lastBtnClassName;
          } else {
            btnClassName = midBtnClassName;
          }
        }
        return (
          <Button
            key={index}
            {...{
              color,
              endIcon,
              icon,
              size,
              variant,
              ...props,
            }}
            className={`${btnClassName} focus:z-10`}
            textAlign={orientation === 'vertical' ? 'left' : 'center'}
          />
        );
      })}
    </div>
  );
}

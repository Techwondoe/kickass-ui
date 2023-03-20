import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { BadgeProps, relevantStyleToSize } from './Badge.types';
import { Icon } from '../icon';
import { Typography } from '../Typography';

export function Badge({
  label,
  color = 'gray',
  icon,
  endIcon,
  size = 'sm',
  avatar,
  status = 'offline',
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={`inline-flex gap-1.5 items-center rounded-full bdge-${color} ${
        relevantStyleToSize[size]
      } ${props?.className ?? ''}`}>
      {icon && <Icon name={icon} size={12} />}
      {status !== 'offline' && <div className={`w-1.5 h-1.5 bg-success-500 rounded-full`} />}
      {avatar && <Avatar src={avatar} name={label ?? ''} className="w-4 h-4" />}
      <Typography
        variant="p"
        size={size === 'sm' ? 'xs' : 'sm'}
        weight="medium"
        className="whitespace-nowrap">
        {label}
      </Typography>
      {endIcon && <Icon name={endIcon} size={12} />}
    </div>
  );
}

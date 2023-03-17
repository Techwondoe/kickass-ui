import React from 'react';
import { ColorType } from '../../../types/colors';
import { Avatar } from '../Avatar/Avatar';
import { Icon, IconType } from '../icon';
import { Typography } from '../Typography';

/**
 * @params color - Text color for badge with color/20 background
 * @params label - Text within badge
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  className?: string;
  color?: Exclude<ColorType, 'white' | 'black'>;
  endIcon?: IconType;
  icon?: IconType;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}
const relevantStyleToSize = {
  sm: 'bdge-sm',
  md: 'bdge-md',
  lg: 'bdge-lg',
};

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

/**
 * @params color - Text color for badge with color/20 background
 * @params label - Text within badge
 */

import React from 'react';
import { ColorType, ColorVariantType } from '../../../types/colors';
import { Avatar } from '../Avatar/Avatar';
import { Icon, IconType } from '../icon';
import { Typography } from '../Typography/Typography';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Exclude<ColorType, 'white' | 'black'>;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  endIcon?: IconType;
  avatar?: string;
  className?: string;
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
  size = 'md',
  avatar,
  status = 'offline',
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={`inline-flex gap-1.5 items-center rounded-full bg-${color}-50 ${
        relevantStyleToSize[size]
      } ${props?.className ?? ''}`}>
      {icon && <Icon name={icon} size={12} color={`${color}-500` as ColorType} />}
      {status !== 'offline' && <div className={`w-1.5 h-1.5 bg-${color}-500 rounded-full`} />}
      {avatar && <Avatar src={avatar} name={label ?? ''} className="w-4 h-4" />}
      <p className={`whitespace-nowrap font-medium text-${color}-700`}> {label}</p>
      {endIcon && <Icon name={endIcon} size={12} color={`${color}-500` as ColorType} />}
    </div>
  );
}

// export default Badge;

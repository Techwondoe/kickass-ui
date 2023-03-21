import React from 'react';
import { Icon } from '../icon';
import { BadgeProps, relevantStyleToSize } from './IconBadge.types';

export function IconBadge({ color = 'gray', icon, size = 'md', ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={`inline-flex gap-1.5 items-center rounded-full ibdge-${color} ${
        relevantStyleToSize[size]
      } ${props?.className ?? ''}`}>
      <Icon name={icon} size={12} />
    </div>
  );
}

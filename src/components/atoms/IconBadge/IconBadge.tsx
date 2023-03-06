/**
 * @params color - Text color for badge with color/20 background
 * @params label - Text within badge
 */

import React from 'react';
import { ColorType } from '../../../types/colors';
import { Icon, IconType } from '../icon';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Exclude<ColorType, 'white' | 'black'>;
  size?: 'sm' | 'md' | 'lg';
  icon: IconType;
  className?: string;
}
const relevantStyleToSize: any = {
  sm: 'ibdge-sm',
  md: 'ibdge-md',
  lg: 'ibdge-lg',
};

export function IconBadge({ color = 'gray', icon, size = 'md', ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={`inline-flex gap-1.5 items-center rounded-full stroke-${color}-800 bg-${color}-50 ${
        relevantStyleToSize[size]
      } ${props?.className ?? ''}`}>
      <Icon name={icon} size={12} />
    </div>
  );
}

export default IconBadge;

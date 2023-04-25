import { HTMLAttributes } from 'react';
/**
 * @param alt - Provide an alt text for the image tag
 * @param className - Custom CSS classes
 * @param currentStatus - Provide user current status
 * @param onClick - Provides onClick function
 * @param shape - Shape of the Avatar
 * @param size - Size of the Avatar component
 * @param src - Source for image tag
 */

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  className?: string;
  name?: string;
  onClick?: () => void;
  shape?: 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  type?: 'image' | 'name' | 'placeholder';
}

export const sizes = {
  '2xl': 'w-16 h-16',
  lg: 'w-12 h-12',
  md: 'w-10 h-10',
  sm: 'w-8 h-8',
  xl: 'w-14 h-14',
  xs: 'w-6 h-6',
};
export const shapes = {
  circle: 'rounded-full',
  square: 'rounded',
};
export const activeClass = {
  '2xl': 'w-4 h-4',
  lg: 'w-3 h-3',
  md: 'w-2.5 h-2.5',
  sm: 'w-2 h-2',
  xl: 'w-3.5 h-4.5',
  xs: 'w-1.5 h-1.5',
};
export const statusColors = {
  online: 'bg-success-500',
  offline: 'bg-gray-500',
  busy: 'bg-error-500',
  away: 'bg-warning-500',
};
export const iconSize = {
  '2xl': 32,
  lg: 28,
  md: 24,
  sm: 20,
  xl: 32,
  xs: 16,
};

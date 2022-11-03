import { HTMLAttributes } from 'react';

export enum AvatarCurrentStatuses {
  AWAY = 'away',
  BUSY = 'busy',
  OFFLINE = 'offline',
  ONLINE = 'online',
}

export enum AvatarSizes {
  LG = 'lg',
  MD = 'md',
  SM = 'sm',
  XL = 'xl',
  XS = 'xs',
  XXL = 'xxl',
  XXXL = 'xxxl',
}

export enum AvatarShapes {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

/**
 * @params alt - Provide an alt text for the image tag
 * @params className - Custom CSS classes
 * @params currentStatus - Provide user current status
 * @params onClick - Provides onClick function
 * @params shape - Shape of the Avatar
 * @params size - Size of the Avatar component
 * @params src - Source for image tag
 */
export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
  currentStatus?: AvatarCurrentStatuses;
  onClick?: () => void;
  shape?: AvatarShapes;
  size?: AvatarSizes;
  src: string;
}

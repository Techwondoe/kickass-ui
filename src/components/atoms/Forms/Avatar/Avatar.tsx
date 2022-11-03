import React from 'react';
import { AvatarCurrentStatuses, AvatarProps, AvatarShapes, AvatarSizes } from './Avatar.types';

const sizes = {
  lg: 'w-12 h-12',
  md: 'w-10 h-10',
  sm: 'w-8 h-8',
  xl: 'w-16 h-16',
  xs: 'w-6 h-6',
  xxl: 'w-20 h-20',
  xxxl: 'w-24 h-24',
};
const shapes = {
  circle: 'rounded-full',
  square: 'rounded',
};
const activeClass = {
  lg: 'w-3 h-3',
  md: 'w-2.5 h-2.5',
  sm: 'w-2 h-2',
  xl: 'w-4 h-4',
  xs: 'w-1.5 h-1.5',
  xxl: 'w-5 h-5',
  xxxl: 'w-6 h-6',
};
const status = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  busy: 'bg-red-500',
};

const defaultUrl =
  'https://avatars.dicebear.com/api/croodles-neutral/manikangkandas.png?background=%23AED7FF';

export function Avatar({
  src,
  alt,
  size = AvatarSizes.MD,
  shape = AvatarShapes.CIRCLE,
  onClick,
  currentStatus = AvatarCurrentStatuses.AWAY,
  className,
  ...restProps
}: AvatarProps) {
  return (
    <span className="inline-block relative">
      <img
        {...restProps}
        className={`inline-block ${onClick ? 'cursor-pointer' : ''} ${sizes[size]} ${
          shapes[shape]
        } ${className}`}
        src={src || defaultUrl}
        alt={alt}
        onClick={onClick}
      />
      {currentStatus !== 'away' && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${
            shape === 'square'
              ? 'translate-y-1/2 translate-x-1/2 transform'
              : `${status[currentStatus]} ${activeClass[size]}`
          }
          `}>
          {shape === 'square' && (
            <span className={`block rounded-full ${status[currentStatus]} ${activeClass[size]}`} />
          )}
        </span>
      )}
    </span>
  );
}
Avatar.defaultProps = {
  size: 'md',
  shape: 'circle',
  currentStatus: 'away',
};

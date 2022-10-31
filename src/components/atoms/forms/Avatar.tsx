/* eslint-disable sort-keys */
import React, { HTMLAttributes } from 'react';

type AvatarCurrentStatuses = 'online' | 'offline' | 'away' | 'busy';

type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

type AvatarShapes = 'circle' | 'square';

export interface Props extends HTMLAttributes<HTMLImageElement> {
  /** Provide an alt text for the image tag */
  alt: string;

  /** Provide user current status */
  currentStatus?: AvatarCurrentStatuses;

  /** Provides onClick function */
  onClick?: () => void;

  /** Which shape you would like to use */
  shape?: AvatarShapes;

  /** Which size you would like to use */
  size?: AvatarSizes;

  /** Provide a source for the image tag */
  src: string;
}

export function Avatar({
  src,
  alt,
  size = 'md',
  shape = 'circle',
  onClick,
  currentStatus = 'away',
  ...restProps
}: Props) {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    xxl: 'w-20 h-20',
    xxxl: 'w-24 h-24',
  };
  const shapes = {
    circle: 'rounded-full',
    square: 'rounded',
  };
  const activeClass = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
    xxl: 'w-5 h-5',
    xxxl: 'w-6 h-6',
  };
  const status = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-red-500',
  };
  return (
    <span className="inline-block relative">
      <img
        {...restProps}
        className={`inline-block ${onClick ? 'cursor-pointer' : ''} ${sizes[size]} ${
          shapes[shape]
        } ${restProps.className}`}
        src={
          src ||
          'https://avatars.dicebear.com/api/croodles-neutral/manikangkandas.png?background=%23AED7FF'
        }
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

/* eslint-disable sort-keys */
import React from 'react';
import { Icon } from '../icon/icon';
import { Typography } from '../Typography/Typography';
import { AvatarProps, sizes, shapes, activeClass, statusColors, iconSize } from './Avatar.types';


export function Avatar({
  src,
  size = 'md',
  shape = 'circle',
  onClick,
  status = 'away',
  type = 'image',
  name = '',
  className,
  ...restProps
}: AvatarProps) {
  const shortName = name
    .split(/\s+/)
    .map((i) => i.slice(0, 1).toUpperCase())
    .slice(0, 2)
    .join('');
  return (
    <div
      className={`relative inline-block bg-gray-50 ${onClick ? 'cursor-pointer' : ''} ${
        sizes[size]
      } ${shapes[shape]} ${className}`}
      onClick={onClick}>
      <div
        className={`flex items-center justify-center w-full h-full ${shapes[shape]} overflow-hidden hover:ring hover:ring-gray-100`}>
        {type === 'image' && (
          <img {...restProps} className={`w-full h-full object-contain`} src={src} alt={name} />
        )}
        {type === 'placeholder' && <Icon name="user-01" color="gray-700" size={iconSize[size]} />}
        {type === 'name' && (
          <Typography
            type={size === '2xl' ? 'display' : 'text'}
            size={size === '2xl' ? 'xs' : size}>
            {shortName}
          </Typography>
        )}
      </div>
      {status !== 'away' && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${
            shape === 'square'
              ? 'translate-y-1/2 translate-x-1/2 transform'
              : `${statusColors[status]} ${activeClass[size]}`
          }
          `}>
          {shape === 'square' && (
            <span className={`block rounded-full ${statusColors[status]} ${activeClass[size]}`} />
          )}
        </span>
      )}
    </div>
  );
}

/* eslint-disable sort-keys */
import React, { HTMLAttributes } from 'react';
import { Icon } from '../icon/icon';
import { Typography } from '../Typography/Typography';

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
  className?: string;
  name?: string;
  onClick?: () => void;
  shape?: 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  type?: 'image' | 'name' | 'placeholder';
}

const sizes = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-14 h-14',
  '2xl': 'w-16 h-16',
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
  xl: 'w-3.5 h-4.5',
  '2xl': 'w-4 h-4',
};
const statusColors = {
  online: 'bg-success-500',
  offline: 'bg-gray-500',
  busy: 'bg-error-500',
  away: 'bg-warning-500',
};
const iconSize = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  '2xl': 32,
};

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
        .map(i => i.slice(0, 1).toUpperCase())
        .slice(0, 2)
        .join("");
    return (
        <div
            className={`relative inline-block bg-gray-50 ${
                onClick ? "cursor-pointer" : ""
            } ${sizes[size]} ${shapes[shape]} ${className}`}
            onClick={onClick}
        >
            <div
                className={`flex items-center justify-center w-full h-full ${shapes[shape]} overflow-hidden hover:ring hover:ring-gray-100`}
            >
                {type === "image" && (
                    <img
                        {...restProps}
                        className={`w-full h-full object-contain`}
                        src={src}
                        alt={name}
                    />
                )}
                {type === "placeholder" && (
                    <Icon
                        name="user-01"
                        color="gray-700"
                        size={iconSize[size]}
                    />
                )}
                {type === "name" && (
                    <Typography
                        type={size === "2xl" ? "display" : "text"}
                        size={size === "2xl" ? "xs" : size}
                    >
                        {shortName}
                    </Typography>
                )}
            </div>
            {status !== "away" && (
                <span
                    className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${
                        shape === "square"
                            ? "translate-y-1/2 translate-x-1/2 transform"
                            : `${statusColors[status]} ${activeClass[size]}`
                    }
          `}
                >
                    {shape === "square" && (
                        <span
                            className={`block rounded-full ${statusColors[status]} ${activeClass[size]}`}
                        />
                    )}
                </span>
            )}
        </div>
    );
}

// export default Avatar;

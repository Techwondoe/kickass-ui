import React, { FC, useMemo } from 'react';
import { iconPack, IconType } from './icon-list';
import { ColorVariantType } from '../../../types/colors';

export interface IconProps {
  className?: string;
  color?: ColorVariantType;
  name: IconType;
  onClick?: () => void;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, color, size = 20, className, onClick }) => {
  const SVGIcon = useMemo(() => iconPack[name], [name]);
  const isSizeANumber = typeof size === 'number';
  return (
    <SVGIcon
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={
        (!isSizeANumber ? `w-[${size}px] h-[${size}px] ` : '') +
        `stroke-${color} fill-none ${className}`
      }
      onClick={onClick}
    />
  );
};

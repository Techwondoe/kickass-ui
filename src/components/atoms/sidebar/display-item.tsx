import React, { FC } from 'react';
import { Badge } from '../Badge/Badge';
import { Icon } from '../icon/icon';
import type { IconType } from '../icon/icon-list';
import { Typography } from '../Typography/Typography';

export interface DisplayItemProps extends React.HTMLProps<HTMLDivElement> {
  badgeValue?: string;
  children?: React.ReactNode;
  dropdown?: boolean;
  icon?: IconType;
  onIconClick?: () => void;
  open?: boolean;
  selected?: boolean;
  title: string;
}

export const DisplayItem: FC<DisplayItemProps> = ({
  title,
  badgeValue,
  icon,
  children = null,
  open = false,
  selected = false,
  dropdown = false,
  className = '',
  onIconClick,
  ...restProps
}) => {
  if (children) {
    return <>{children}</>;
  }

  return (
    <div
      {...restProps}
      className={`group flex items-center px-3 py-2 mb-1 rounded-md cursor-pointer ${
        (selected || open) && 'bg-gray-50'
      } hover:bg-gray-50 ${className}`}>
      {icon ? (
        <Icon name={icon} size={20} color="gray-500" className="mr-3 group-hover:stroke-gray-700" />
      ) : (
        <div className="w-5 mr-3" />
      )}
      <div className="flex-grow flex items-center">
        <Typography
          weight="medium"
          color="gray-700"
          className="text-gray-700 group-hover:text-gray-900">
          {title}
        </Typography>
        {badgeValue && <Badge label={badgeValue} className="bg-gray-100 text-gray-700 ml-auto" />}
      </div>
      {dropdown && (
        <div
          className="rounded-full hover:bg-gray-100 ml-3 p-1"
          onClick={(e) => {
            e.stopPropagation();
            onIconClick?.();
          }}>
          <Icon
            name="chevron-right"
            size={20}
            color={open ? 'gray-400' : 'gray-300'}
            className={`${
              open ? 'rotate-90' : ''
            } flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:stroke-gray-400 flex`}
          />
        </div>
      )}
    </div>
  );
};

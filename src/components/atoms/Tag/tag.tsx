import React, { FC } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Checkbox } from '../checkbox/checkbox';
import { Icon } from '../icon';
import { Typography } from '../Typography/Typography';
import { TagProps, sizes, countSizes } from './tag.types';

export const Tag: FC<TagProps> = ({
  label,
  size = 'md',
  status = 'away',
  avatar,
  count,
  checkable = false,
  closable = false,
  onCheck,
  onUnCheck,
  onClose,
  className,
}) => {
  return (
    <div
      className={`w-fit flex items-center ${sizes[size]} gap-[3px] border border-gray-300 rounded-md ${className}`}>
      {checkable && (
        <Checkbox
          onChange={(checked) => {
            if (checked) {
              onCheck?.();
            } else {
              onUnCheck?.();
            }
          }}
          color="gray"
          size={size === 'lg' ? 'md' : 'sm'}
        />
      )}
      {status !== 'away' && (
        <div
          className={`w-1.5 h-1.5 bg-${status === 'online' ? 'success' : 'gray'}-500 rounded-full`}
        />
      )}
      {avatar && <Avatar src={avatar} className="w-4 h-4" />}
      <Typography size="sm" color="gray-700">
        {label}
      </Typography>
      {count !== undefined && (
        <div className={`w-fit ${countSizes[size]} bg-gray-100 rounded-[3px]`}>
          <Typography size="sm" color="gray-700">
            {count}
          </Typography>
        </div>
      )}
      {closable && (
        <Icon
          name="x-close"
          size={14}
          color="gray-400"
          onClick={onClose}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

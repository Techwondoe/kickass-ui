import React, { FC } from 'react';
import { Icon } from '../icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Typography } from '../Typography/Typography';
import { UploadItemsProps } from './UploadItem.types';

export const UploadItem: FC<UploadItemsProps> = ({ label, size, progress = 0,className = '' }) => {
  return (
    <div className={`flex p-3.5 gap-3.5 bg-white border border-gray-200 rounded-lg ${className}`}>
      <div>
        <div className={`w-8 h-8 flex justify-center items-center rounded-full bg-primary-100`}>
          <Icon name="file-04" size={16} color="primary-600" />
        </div>
      </div>
      <div className="grow">
        <div className="flex">
          <div className="grow">
            <Typography size="sm" color="gray-700">
              {label}
            </Typography>
            <Typography size="sm" color="gray-500">
              {size}
            </Typography>
          </div>
          <div>
            <Icon name="trash-01" size={20} color="gray-500" />
          </div>
        </div>
        <ProgressBar value={progress} showPercentage className="mt-2.5" />
      </div>
    </div>
  );
};

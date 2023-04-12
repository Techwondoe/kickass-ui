import React, { FC } from 'react';
import { Typography } from '../Typography/Typography';
import {ProgressBarProps, containerClass, percentageClass } from './ProgressBar.types'


export const ProgressBar: FC<ProgressBarProps> = ({
  value = 10,
  color = 'primary',
  showPercentage = false,
  percentagePosition = 'right',
  className = '',
}) => {
  return (
    <div className={`flex ${containerClass[percentagePosition]} ${className}`}>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full bg-${color}`}
          style={{
            width: `${value < 0 ? 0 : value > 100 ? 100 : value}%`,
          }}
        />
      </div>
      {showPercentage && (
        <Typography size="sm" color="gray-700" className={percentageClass[percentagePosition]}>
          {value}%
        </Typography>
      )}
    </div>
  );
};

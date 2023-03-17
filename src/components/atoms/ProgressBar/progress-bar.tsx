import React, { FC } from 'react';
import { PrimaryColorVariantType } from '../../../types/colors';
import { Typography } from '../Typography/Typography';

export interface ProgressBarProps {
  className?: string;
  color?: Exclude<PrimaryColorVariantType, 'white' | 'black'>;
  percentagePosition?: 'right' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showPercentage?: boolean;
  value: number;
}

const containerClass = {
  'bottom-left': 'flex-col',
  'bottom-right': 'flex-col items-end',
  left: 'flex-row-reverse items-center',
  right: 'items-center',
  'top-left': 'flex-col-reverse',
  'top-right': 'flex-col-reverse items-end',
};

const percentageClass = {
  'bottom-left': 'mt-2',
  'bottom-right': 'mt-2',
  left: 'mr-3',
  right: 'ml-3',
  'top-left': 'mb-2',
  'top-right': 'mb-2',
};

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

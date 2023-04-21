import React from 'react';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon/icon';
import { DirectionMetricProps } from './DirectionMetric.types';

export function DirectionMetric({
  value,
  limit,
  className = '',
  displayValue = `${value}`,
}: DirectionMetricProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {value !== limit && (
        <Icon
          name={value > limit ? 'arrow-up' : 'arrow-down'}
          color={value > limit ? 'success-500' : 'error-700'}
          size={20}
        />
      )}
      <Typography
        size="sm"
        color={value === limit ? 'gray-700' : value > limit ? 'success-700' : 'error-700'}>
        {displayValue}
      </Typography>
    </div>
  );
}

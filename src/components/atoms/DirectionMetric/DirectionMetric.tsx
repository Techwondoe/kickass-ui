import React from 'react';
import { Typography } from '../Typography/Typography';
import { Icon } from '../icon/icon';

export interface DirectionMetricProps {
  displayValue?: string;
  limit: number;
  value: number;
}

export function DirectionMetric({ value, limit, displayValue = `${value}` }: DirectionMetricProps) {
  return (
    <div className="flex items-center gap-0.5">
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

export default DirectionMetric;

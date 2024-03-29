import React, { FC } from 'react';
import { Typography } from '../Typography/Typography';
import { EmptySectionProps } from './EmptySection.types';

export const EmptySection: FC<EmptySectionProps> = ({
  title = 'This page is under construction.',
  className=''
}) => {
  return (
    <div className={`w-full h-full bg-gray-50 flex justify-center items-center ${className}`}>
      <Typography color="gray-500" type="display" size="sm">
        {title}
      </Typography>
    </div>
  );
};

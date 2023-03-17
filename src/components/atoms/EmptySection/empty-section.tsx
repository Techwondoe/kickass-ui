import React, { FC } from 'react';
import { Typography } from '../Typography/Typography';

export interface EmptySectionProps {
  title?: string;
}

export const EmptySection: FC<EmptySectionProps> = ({
  title = 'This page is under construction.',
}) => {
  return (
    <div className="w-full h-full bg-gray-50 flex justify-center items-center">
      <Typography color="gray-500" type="display" size="sm">
        {title}
      </Typography>
    </div>
  );
};

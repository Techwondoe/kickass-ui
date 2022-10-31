import React from 'react';
import { Button, Typography } from '../../atoms';

export interface Props {
  actions?: {
    active?: boolean;
    label: string;
  }[];
  description?: string;
  title: string;
}

export function Simple({ title, description, actions }: Props) {
  return (
    <div
      className={`border-b border-gray-200 pb-5 ${
        actions && 'sm:flex sm:items-center sm:justify-between'
      }`}>
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
      <div className="mt-3 flex sm:mt-0 sm:ml-4 space-x-4">
        {actions?.map((action) => (
          <Button key={action.label} variant={action.active ? 'contained' : 'outlined'}>
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

import React, { ReactNode } from 'react';
import { Button, Typography, TypographyVariants } from '~/components/atoms';

export interface SimpleEmptyStateProps {
  action?: {
    icon?: React.ElementType;
    label: string;
    onClick: () => void;
  };
  description?: string;
  icon: ReactNode;
  title: string;
  withDashBorder?: boolean;
}
export function SimpleEmptyState({
  title,
  description,
  icon,
  action,
  withDashBorder,
}: SimpleEmptyStateProps) {
  const actionIcon = () => {
    if (action) {
      const { icon } = action;
      const ActionIcon = icon as unknown as React.ElementType;
      return <ActionIcon className="-ml-1 mr-2 h-5 w-5" />;
    }
    return undefined;
  };
  return (
    <div
      className={`text-center ${
        withDashBorder &&
        'relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12  hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      }`}>
      <div className="mx-auto h-12 w-12 text-gray-400">{icon}</div>
      <Typography variant={TypographyVariants.H3}>{title}</Typography>
      <Typography>{description}</Typography>
      {action && (
        <div className="mt-6">
          {actionIcon()}
          <Button>{action.label}</Button>
        </div>
      )}
    </div>
  );
}

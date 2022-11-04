import React from 'react';
import { Button, ButtonVariants, Typography, TypographyVariants } from '../../atoms';
import { SectionHeadingProps } from './SectionHeading.types';

export function SectionHeading({ title, description, actions }: SectionHeadingProps) {
  return (
    <div
      className={`border-b border-gray-200 pb-5 ${
        actions && 'sm:flex sm:items-center sm:justify-between'
      }`}>
      <Typography variant={TypographyVariants.H3}>{title}</Typography>
      <Typography>{description}</Typography>
      <div className="mt-3 flex sm:mt-0 sm:ml-4 space-x-4">
        {actions?.map((action) => (
          <Button
            key={action.label}
            variant={action.active ? ButtonVariants.CONTAINED : ButtonVariants.OUTLINED}>
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

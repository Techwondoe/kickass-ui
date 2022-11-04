import React from 'react';
import { Button, Typography, TypographyVariants } from '~/components/atoms';

/**
 * @params headingText - Main text for the component
 */
export interface PageHeadingWithActionsProps {
  headingText: string;
}

export function PageHeadingWithActions({ headingText }: PageHeadingWithActionsProps) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <Typography variant={TypographyVariants.H2}>{headingText}</Typography>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4 space-x-2">
        <Button>Edit</Button>
        <Button>Publish</Button>
      </div>
    </div>
  );
}

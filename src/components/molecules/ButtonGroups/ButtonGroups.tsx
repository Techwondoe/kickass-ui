import React from 'react';
import { Button } from '~/components/atoms';

export interface ButtonGroupsProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string[];
}

export function ButtonGroups({ label, ...props }: ButtonGroupsProps) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {label.map((item, index) => {
        return (
          <Button key={index} {...props} color="primary" variant="contained">
            {item}
          </Button>
        );
      })}
    </span>
  );
}

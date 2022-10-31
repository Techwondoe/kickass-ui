import React from 'react';
import { Button } from '../../atoms';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string[];
}

export function Basic({ label, ...props }: Props) {
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

import React from 'react';
import { Button, ButtonVariants } from '~/components/atoms';
import { ColorCodes } from '~/constants/types';

/**
 * @params buttons - Array of buttons ( label and onClick params )
 */
export interface ButtonGroupsProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttons: {
    color?: ColorCodes;
    label: string;
    onClick: (value?: unknown) => void;
  }[];
}

export function ButtonGroups({ buttons }: ButtonGroupsProps) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {buttons.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={item.onClick}
            color={item.color || ColorCodes.PRIMARY}
            variant={ButtonVariants.CONTAINED}>
            {item.label}
          </Button>
        );
      })}
    </span>
  );
}

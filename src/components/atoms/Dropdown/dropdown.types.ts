import { FC } from 'react';

/**
 * Defines the props for the Dropdown component
 * @param children - What children shall be passed
 * @param fullWidth - What the component should fill the whole width
 * @param onChange - onChange function that needs to be passed
 * @param open - Whether it is open or not
 * @param position - What shall be the position from 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 */

export interface SubComponents {
  Button: FC<DropdownButtonProps>;
  Panel: FC<DropdownPanelProps>;
}

export interface DropdownProps {
  children: [
    React.ReactComponentElement<SubComponents['Button']>,
    React.ReactComponentElement<SubComponents['Panel']>
  ];
  className?: string;
  fullWidth?: boolean;
  onChange?: (value: boolean) => void;
  open?: boolean;
  position?: 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface DropdownPanelProps {
  children: React.ReactNode;
}

export interface DropdownButtonProps {
  children: React.ReactNode;
}

export const emptyValues = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

import { ColorCodes } from '~/constants/types';

export enum CheckboxSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface CheckboxProps {
  checked?: boolean;
  color?: ColorCodes;
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSize;
}

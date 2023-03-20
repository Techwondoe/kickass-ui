import { PrimaryColorType } from '../../../types/colors';

export interface CheckboxProps {
  checked?: boolean;
  color?: Omit<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  indeterminate?: boolean;
  initiallyChecked?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

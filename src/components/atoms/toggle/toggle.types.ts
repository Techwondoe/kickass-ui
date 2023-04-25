import { ColorType } from '~/types/colors';

export interface ToggleProps {
  className?: string;
  color?: ColorType;
  defaultEnabled?: boolean;
  disabled?: boolean;
  enabled?: boolean;
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const toggleSize = {
  sm: 'w-9 h-5 p-0.5',
  md: 'w-11 h-6 p-0.5',
  lg: 'w-14 h-8 p-1',
};

export const nobSize = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

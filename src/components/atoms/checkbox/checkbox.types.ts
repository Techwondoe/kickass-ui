import { PrimaryColorType } from '../../../types/colors';

/**
 * @param checked- Current state of checkbox True/False
 * @param color - Status array
 * @param disabled - If checkbox needs to be disabled
 * @param indeterminate - indeterminate in checkbox
 * @param initiallyChecked - Checkbox should be checked when loaded or not
 * @param name - Name associated with checkbox
 * @param onChange - OnChange function to be passed
 * @param size - Size of the checkbox
 */

export interface CheckboxProps {
  checked?: boolean;
  color?: Omit<PrimaryColorType, 'white' | 'black'>;
  disabled?: boolean;
  indeterminate?: boolean;
  initiallyChecked?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  className?:string
}

export const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

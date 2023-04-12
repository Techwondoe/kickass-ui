import { ColorType } from '../../../types/colors';

export interface RadioProps {
  checked?: boolean;
  className?: string;
  color?: ColorType;
  name?: string;
  onChange?: () => void;
}

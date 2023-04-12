import { PrimaryColorVariantType } from '../../../types/colors';

export interface ProgressBarProps {
  className?: string;
  color?: Exclude<PrimaryColorVariantType, 'white' | 'black'>;
  percentagePosition?: 'right' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showPercentage?: boolean;
  value: number;
}

export const containerClass = {
  'bottom-left': 'flex-col',
  'bottom-right': 'flex-col items-end',
  left: 'flex-row-reverse items-center',
  right: 'items-center',
  'top-left': 'flex-col-reverse',
  'top-right': 'flex-col-reverse items-end',
};

export const percentageClass = {
  'bottom-left': 'mt-2',
  'bottom-right': 'mt-2',
  left: 'mr-3',
  right: 'ml-3',
  'top-left': 'mb-2',
  'top-right': 'mb-2',
};

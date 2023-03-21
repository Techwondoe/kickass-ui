import { ColorType } from '../../../types/colors';
import { IconType } from '../icon';

/**
 * @param className - ClassNames to be passed to the component
 * @param color - color for icon color
 * @param icon - Icon to passed to the component
 * @param size - Size of the component
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  color?: Exclude<ColorType, 'white' | 'black'>;
  icon: IconType;
  size?: 'sm' | 'md' | 'lg';
}
export const relevantStyleToSize: Record<string, string> = {
  sm: 'ibdge-sm',
  md: 'ibdge-md',
  lg: 'ibdge-lg',
};

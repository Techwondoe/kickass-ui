import { ColorType } from '../../../types/colors';
import { IconType } from '../icon';
/**
 * @param avatar - Provide an avatar in badge
 * @param className - Custom CSS classes
 * @param color - Provide color for badges
 * @param endIcon - Provides icon at the end of the badge
 * @param icon - Provides icon at the end of the badge
 * @param label - Provides text to the badge
 * @param size - Provides size to the badge
 * @param status - Provides Online/Offline/Away status
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  className?: string;
  color?: Exclude<ColorType, 'white' | 'black'>;
  endIcon?: IconType;
  icon?: IconType;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}
export const relevantStyleToSize = {
  sm: 'bdge-sm',
  md: 'bdge-md',
  lg: 'bdge-lg',
};

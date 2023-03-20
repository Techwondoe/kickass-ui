import { ColorType } from '../../../types/colors';
import { IconType } from '../icon';
/**
 * @params avatar - Provide an avatar in badge
 * @params className - Custom CSS classes
 * @params color - Provide color for badges
 * @params endIcon - Provides icon at the end of the badge
 * @params icon - Provides icon at the end of the badge
 * @params label - Provides text to the badge
 * @params size - Provides size to the badge
 * @params status - Provides Online/Offline/Away status
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

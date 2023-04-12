import { ColorVariantType } from '../../../types/colors';
import { IconType } from './icon-list';
/**
 * Defines the props for the Dropdown component
 * @param className - Classname that can be passed
 * @param color - Color of the component
 * @param name - name of the component
 * @param onClick - Onclick handler to be passed 
 * @param size - Size of the component
 */

export interface IconProps {
  className?: string;
  color?: ColorVariantType;
  name: IconType;
  onClick?: () => void;
  size?: number;
}

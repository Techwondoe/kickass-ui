import { IconType } from '~/constants/types';

/**
 * @params bgColor - Background color for the list item
 * @params icon - Icon component for the list item
 * @params iconColor - Icon color for the list item
 * @params name - Text to display for the list item
 * @params value - Additional text for the list item
 */
export interface MoodItem {
  bgColor: string;
  icon: IconType;
  iconColor: string;
  name: string;
  value: string;
}

/**
 * @params avatarSrc - Source for avatar image
 * @params buttonText - Text to display within button at the end
 * @params label - Text to display above text areas
 * @params moods - Array of MoodItem
 * @params placeholder - Placeholder text for textarea
 */
export interface TextAreasProps {
  avatarSrc: string;
  buttonText: string;
  label: string;
  moods: MoodItem[];
  placeholder: string;
}

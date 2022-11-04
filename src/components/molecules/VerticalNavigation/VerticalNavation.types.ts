import { IconType } from '~/constants/types';

/**
 * @params current - Flag for display style
 * @params href - href for anchor tag to redirect
 * @params icon - Display icon along with the text
 * @params name - Text to be displayed
 */
export interface VerticalNavigationItem {
  current: boolean;
  href: string;
  icon?: IconType;
  name: string;
}
/**
 * @params navigation - Array of VerticalNavigationItem
 */
export interface VerticalNavigationProps {
  navigation: VerticalNavigationItem[];
}

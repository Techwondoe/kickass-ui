import { IconType } from '~/constants/types';

/**
 * @params label - Main text for the stat
 * @params value - Number to be displayed along with label
 */
export interface StatItem {
  label: string;
  value: number;
}
/**
 * @params stats - Array of ModalActionItem
 * @params user - Contains params imageUrl for image source, name and role as descriptive text
 */
export interface PageHeadingCardProps {
  stats: StatItem[];
  user: {
    imageUrl: string;
    name: string;
    role: string;
  };
}

/**
 * @params active - Boolean for UI change
 * @params value - Text to be displayed on the action item
 * @params icon - Icon component
 */
export interface PageHeadingItem {
  active?: boolean;
  buttonText: string;
  icon?: IconType;
}

/**
 * @params actions - Array of PageHeadingItem
 * @params user - Contains params avatar for image source, date for date string, name and applied as descriptive text
 */
export interface PageHeadingWithAvatarAndActionProps {
  actions: PageHeadingItem[];
  profile: {
    appliedFor: string;
    avatar: string;
    date: string;
    name: string;
  };
}

/**
 * @params actions - Array of PageHeadingItem
 * @params user - Contains params avatar for image source, backgroundImage for background image source, name and applied as descriptive text
 */
export interface PageHeadingWithBannerProps {
  actions: PageHeadingItem[];
  profile: {
    avatar: string;
    backgroundImage: string;
    email: string;
    name: string;
  };
}

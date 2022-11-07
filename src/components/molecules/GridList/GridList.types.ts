import { IconType } from '~/constants/types';

///// Actions With SharedBorders Types
/**
 * @params href - Href component for the Action Item
 * @params icon - Icon component
 * @params iconBackground - Background image css
 * @params iconForeground - Foreground image css
 * @params title - Main text for the Action component
 */
interface Action {
  href: string;
  icon: IconType;
  iconBackground: string;
  iconForeground: string;
  title: string;
}

/**
 * @params actions - Array of actions Items
 */
export interface ActionWithSharedBorderProps {
  actions: Action[];
}

///// Horizontal Link Card types
/**
 * @params email - Email string for the item
 * @params imageUrl - Image source string for the item
 * @params name - Main text string for the item
 * @params role - Additional info ( Role ) string for the item
 */
interface HorizontalLinkItem {
  email: string;
  imageUrl: string;
  name: string;
  role: string;
}

/**
 * @params people - Array of HorizontalLinkItem
 */
export interface HorizontalLinkCardsProps {
  people: HorizontalLinkItem[];
}

///// Contact card with small potrait
/**
 * @params telephone - Telephone string for the item
 * @params title - Additional string apart from name string for the item
 */
interface ContactCardItem extends HorizontalLinkItem {
  telephone: string;
  title: string;
}

/**
 * @params people - Array of ContactCardItem
 */
export interface ContactCardsProps {
  people: ContactCardItem[];
}

///// Simple Cards
/**
 * @params bgColor - Telephone string for the item
 * @params href - Href component for the Project Item
 * @params initials - Small string for name
 * @params members - Number of members
 * @params name - Project name
 */
interface Projects {
  bgColor: string;
  href: string;
  initials: string;
  members: number;
  name: string;
}

/**
 * @params projects - Array of ContactCardItem
 */
export interface SimpleGridListProps {
  projects: Projects[];
}

/**
 * @params files - Array of Object containing string size and title as display and source for image component
 */
export interface ImagesWithDetailsProps {
  files: {
    size: string;
    source: string;
    title: string;
  }[];
}

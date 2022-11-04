/**
 * @params active - Flag to show Button style
 * @params label - Text to show within button action
 */
export interface SectionHeadingItem {
  active?: boolean;
  label: string;
}

/**
 * @params actions - Array of SectionHeadingItem
 * @params description - Additional text for the header
 * @params title - Section Title
 */
export interface SectionHeadingProps {
  actions?: SectionHeadingItem[];
  description?: string;
  title: string;
}

/**
 * @params current - Flag for UI style
 * @params href - href redirect for the tab item
 * @params name - title for the tab item
 */
export interface SectionTabHeadingItem {
  current: boolean;
  href: string;
  name: string;
}

/**
 * @params tabs - Array of SectionTabHeadingItem
 */
export interface SectionHeadingWithTabsProps extends Omit<SectionHeadingProps, 'actions'> {
  tabs: SectionTabHeadingItem[];
}

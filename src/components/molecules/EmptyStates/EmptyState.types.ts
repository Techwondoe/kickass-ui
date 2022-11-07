import { IconType } from '~/constants/types';

/////// Common Props
/**
 * @params description - Additional text for the empty state component
 * @params icon - Icon component for the empty state
 * @params title - Text for the empty state
 */
export interface CommonEmptyStateProps {
  description?: string;
  icon: IconType;
  title: string;
}

///////// Simple Props
export interface EmptyStateAction {
  icon?: IconType;
  label: string;
  onClick: () => void;
}

/**
 * @params action - Contains a icon param, label param for text and an onClick callback
 * @params withDashBorder - Flag to display UI
 */
export interface SimpleEmptyStateProps extends CommonEmptyStateProps {
  action?: EmptyStateAction;
  withDashBorder?: boolean;
}

//////// With Recommendations Props
export interface FormData {
  buttonText: string;
  label: string;
}

export interface EmptyStatePeople {
  imageUrl: string;
  name: string;
  role: string;
}
/**
 * @params formData - Contains a buttonText and label param
 * @params people - Array of params for Image source, name and role (string params)
 * @params peopleListLabel - Title for the People array component
 */
export interface WREmptyStateProps extends CommonEmptyStateProps {
  formData: FormData;
  people: EmptyStatePeople[];
  peopleListLabel: string;
}

/////// With Recommendations Grid Props
/**
 * @params accesibilityLabel - String array for accesibility component
 */
export interface WRGEmptyStateProps extends WREmptyStateProps {
  accesibilityLabel: string[];
}

/////// With Starting points Props
/**
 * @params background - Background style css
 */
export interface StartingPointItem extends CommonEmptyStateProps {
  background: string;
}
/**
 * @params externalLink - href param to redirect and label to display text
 * @params items - Array of StartingPointItem
 */
export interface EmptyStateWithLinkProps extends Omit<CommonEmptyStateProps, 'icon'> {
  externalLink: {
    href: string;
    label: string;
  };
  items: StartingPointItem[];
}

//////// With Template Props
/**
 * @params href - href redirect for the icon
 * @params iconColor - icon style css
 * @params name - title for the item
 */
export interface TemplateItem extends CommonEmptyStateProps {
  href: string;
  iconColor: string;
  name: string;
}

/**
 * @params items - Array of TemplateItem
 */
export interface EmptyStateWithTemplateProps extends Omit<EmptyStateWithLinkProps, 'items'> {
  items: TemplateItem[];
}

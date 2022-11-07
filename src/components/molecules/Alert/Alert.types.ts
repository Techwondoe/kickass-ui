import { ColorCodes, IconType } from '~/constants/types';

export interface AlertAction {
  label: string;
  onClick: () => void;
}

/**
 * @params Icon - Icon to be displayed at the top of the component
 * @params actions - list of actionable CTAs
 * @params closeIcon - flag for displaying close icon
 * @params color - background color and text contrast color
 * @params description - description text array
 * @params title - Title text
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon?: IconType;
  actions?: AlertAction[];
  closeIcon?: boolean;
  color?: ColorCodes;
  description?: string[];
  title?: string;
}

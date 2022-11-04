export interface ActionPanelButton {
  label: string;
  onClick: () => void;
}

/**
 * @params button - button component on the left of title text
 * @params buttonRight - button component on the right of title text
 * @params description - description text beneath title text
 * @params link - link component with href and text params displayed with button
 * @params title - Title text
 */
export interface ActionPanelProps {
  button?: ActionPanelButton;
  buttonRight?: ActionPanelButton;
  description: string;
  link?: {
    href: string;
    label: string;
  };
  title: string;
}

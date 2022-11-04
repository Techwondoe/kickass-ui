/**
 * @params label - Text to display for action item
 * @params onClick - Callback when action item is clicked
 * @params ref - Custom reference to modal action item
 */
export interface ModalActionItem {
  label: string;
  onClick: () => void;
  ref?: React.RefObject<HTMLButtonElement>;
}

/**
 * @params actions - Array of ModalActionItem
 * @params description - additional text
 * @params title - primary text
 */
export interface CommonModalProps extends React.HTMLAttributes<HTMLDivElement> {
  actions: ModalActionItem[];
  description: string;
  title: string;
}

/**
 * @params dismissButton - flag to display dismissbutton
 * @params grayFooter - flag to toggle gray footer
 * @params leftAlignedButtons - flag to align buttons on left
 */
export interface SimpleAlertProps extends CommonModalProps {
  dismissButton?: boolean;
  grayFooter?: boolean;
  leftAlignedButtons?: boolean;
}

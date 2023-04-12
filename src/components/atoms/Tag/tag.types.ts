/**
 * @param avatar - Avatar for the component
 * @param checkable - Whether the component is checkable or not
 * @param className -Custom classes for the component
 * @param closable - Whether the component is closable
 * @param count - Count for the component
 * @param label - Label for the component
 * @param onCheck - handler for onCheck
 * @param onClose - handler for onClose
 * @param onUnCheck - handler for uncheck
 * @param size - Size of the component 'sm' | 'md' | 'lg'
 * @param status - Status for the component 'online' | 'offline' | 'away'
 */

export interface TagProps {
  avatar?: string;
  checkable?: boolean;
  className?: string;
  closable?: boolean;
  count?: number;
  label: string;
  onCheck?: () => void;
  onClose?: () => void;
  onUnCheck?: () => void;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}

export const sizes = {
  sm: 'px-2 py-0.5',
  md: 'px-[9px] py-[3px]',
  lg: 'px-2.5 py-1',
};

export const countSizes = {
  sm: 'px-1',
  md: 'px-[5px]',
  lg: 'px-1.5',
};

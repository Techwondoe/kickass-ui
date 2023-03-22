/**
 * @param accept - Accept string for component
 * @param disabled - Whether the component is disabled or not
 * @param onChange - OnChange handler for the component
 */

export interface UploadProps {
  accept?: string;
  disabled?: boolean;
  onChange?: (fileList: FileList | null) => void;
}

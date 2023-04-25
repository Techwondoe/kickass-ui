/**
 * @param maxFiles - Maximum number of files that can be accepted
 * @param maxSize - Maximum size of file that can be accepted
 * @param minSize - Minimum size of file that can be accepted
 * @param acceptedValues - Accept string for component
 * @param disabled - Whether the component is disabled or not
 * @param onChange - OnChange handler for the component
 */

export interface UploadProps {
  acceptedValues?: string[];
  className?: string;
  disabled?: boolean;
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  onChange?: (fileList: File[] | null) => void;
  onError?: (err: unknown) => void;
}

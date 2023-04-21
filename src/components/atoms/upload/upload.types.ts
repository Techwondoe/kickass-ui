/**
 * @param maxFiles - Maximum number of files that can be accepted
 * @param maxSize - Maximum size of file that can be accepted
 * @param minSize - Minimum size of file that can be accepted
 * @param acceptedValues - Accept string for component
 * @param disabled - Whether the component is disabled or not
 * @param onChange - OnChange handler for the component
 */

export interface UploadProps {
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  acceptedValues?: string[];
  disabled?: boolean;
  onError?: (err: unknown) => void;
  onChange?: (fileList: File[] | null) => void;
  className?: string;
}



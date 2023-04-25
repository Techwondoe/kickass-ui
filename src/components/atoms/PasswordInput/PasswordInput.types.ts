/**
 * @param disabled - Whether the component should be disabled or not
 * @param error - Error text for the component
 * @param fullWidth -Whether the component should be full width
 * @param hint - Hint text for the component
 * @param hasError - Whether the component has component
 * @param label - Label for displaying the component
 * @param onBlur - onBlur handler of the component
 * @param onChange - onChange handler of the component
 * @param placeholder - Placeholder of the component
 * @param value - Value of the component
 */

export interface PasswordInputProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hasError?: boolean;
  hint?: string;
  label?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

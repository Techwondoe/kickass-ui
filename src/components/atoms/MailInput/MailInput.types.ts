/**
 * @param disabled - component should be disabled or not
 * @param error - error text for the component
 * @param fullWidth - whether it should span whole width
 * @param hint - Hint text for the component
 * @param label - Label to be passed to the component
 * @param onChange - OnChange function for the component
 * @param placeholder - Placeholder for the component
 * @param value - Value of the component
 */

export interface MailInputProps {
  className?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

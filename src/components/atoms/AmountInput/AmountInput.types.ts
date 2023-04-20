/**
 * Defines the props for the AmountInput component
 * @param disabled - Whether the component is disabled
 * @param error - Whether the component has an error
 * @param fullWidth - Whether the conmponent should take up the full width of its container
 * @param hint - Helper text to display below the component
 * @param label - Label to be displayed above the component
 * @param onChange - OnChange Function to be passeded to the component
 * @param placeholder - Placeholder text to be displayed inside the component
 * @param value - Value of the component
 */

export interface AmountInputProps {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  className?: string;
}

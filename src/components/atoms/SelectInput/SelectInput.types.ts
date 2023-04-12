/**
 * @param chevronLeft -Whether Left Icon should be displayed
 * @param disabled - Whether the component should be disabled or not
 * @param error - Error text for the component
 * @param fullWidth -Whether the component should be full width
 * @param hint - Hint text for the component
 * @param items - Items for the component
 * @param label - Label for displaying the component
 * @param onChange - onChange handler of the component
 * @param placeholder - Placeholder of the component
 * @param renderItem - Render Item of the component
 * @param renderSelectedItem - Render Selected Items of the component
 * @param value - Value of the component
 */

export interface SelectInputValue {
  [key: string]: string;
  id: string;
}

export interface SelectInputProps {
  chevronLeft?: boolean;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  items?: SelectInputValue[];
  label?: string;
  onChange?: (value: SelectInputValue) => void;
  placeholder?: string;
  renderItem?: (value: SelectInputValue) => React.ReactNode;
  renderSelectedItem?: (value: SelectInputValue) => React.ReactNode;
  value?: SelectInputValue;
}
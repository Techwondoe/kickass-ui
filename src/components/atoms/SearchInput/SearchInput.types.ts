
/**
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
 * @param searchKeys - Search Keys of the component
 * @param value - Value of the component
 */

export interface SearchInputValue {
  [key: string]: string;
  id: string;
}

export interface SearchInputProps<Value = SearchInputValue> {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  hint?: string;
  items?: Value[];
  label?: string;
  onChange?: (value: Value | null) => void;
  placeholder?: string;
  renderItem?: (value: Value) => React.ReactNode;
  renderSelectedItem?: (value: Value) => React.ReactNode;
  searchKeys?: [keyof Value];
  value?: Value;
}

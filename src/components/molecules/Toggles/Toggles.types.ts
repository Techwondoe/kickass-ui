/**
 * @params onToggle - Callback when switch is pressed
 */
export interface CommonToggleProps {
  onToggle: (value: boolean) => void;
}

/**
 * @params details - Additional text to display with toggle
 * @params label - Text to display with toggle
 */
export interface ToggleModuleProps extends CommonToggleProps {
  details?: string;
  label: string;
}

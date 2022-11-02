/* eslint-disable sort-keys */

import { ColorCodes } from '~/constants/types';

export type TextFieldVariants = 'filled' | 'outlined' | 'standard';

export type TextFieldSizes = 'small' | 'normal';

/**
 * Defines the props for the TextField component
 * @param color - The color of the TextField
 * @param disabled - Whether the TextField is disabled
 * @param error - Whether the TextField has an error
 * @param helperText - Helper text to display below the TextField
 * @param id - Id to be used for unique identification
 * @param label - Label to be displayed above the TextField
 * @param name - Name to be used for unique identification
 * @param placeholder - Placeholder text to be displayed inside the TextField
 * @param type - TextField type (text, password, email, etc.)
 * @param value - Value of the TextField
 * @param variant - Variant of the TextField (filled, outlined, standard)
 * @param size - Size of the TextField (small, normal)
 * @param fullWidth - Whether the TextField should take up the full width of its container
 * @param multiline - Whether the TextField should be multiline (textarea)
 * @param select - Whether the TextField should be a select (dropdown)
 * @param options - Options to be displayed in the select (dropdown)
 * @param className - Additional class names to be added to the TextField
 * @param restProps - Additional props to be spread to the TextField
 */

export interface TextFieldProps {
  className?: string;
  color?: ColorCodes;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  id?: string;
  label?: string;
  multiline?: boolean;
  name?: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  select?: boolean;
  size?: TextFieldSizes;
  type?: string;
  value?: string;
  variant?: TextFieldVariants;
}

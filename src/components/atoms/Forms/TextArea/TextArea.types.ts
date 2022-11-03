import { HTMLAttributes } from 'react';

export enum TextAreaResize {
  BOTH = 'both',
  HORIZONTAL = 'horizontal',
  NONE = 'none',
  VERTICAL = 'vertical',
}

export enum TextAreaWrap {
  HARD = 'hard',
  SOFT = 'soft',
}

/**
 * @params autoFocus - Autofocus the TextArea on load
 * @params cols - The cols attribute specifies the visible width of a text area.
 * @params disabled - TextArea editable or not
 * @params id - unique id
 * @params label - text to display above textarea
 * @params maxLength - Max number of characters
 * @params minLength - Min number of characters
 * @params onChange - On value change for text area
 * @params placeholder - Place holder text for
 * @params readOnly - TextArea editable or not
 * @params required - Submittable without value
 * @params resize - Resize on screen dimensions change
 * @params rows - The rows attribute specifies the visible height of text area
 * @params value - value/text to display
 * @params wrap - Wrap the text to next line or not
 */
export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  /** Provide a autofocus attribute for the textarea */
  autoFocus?: boolean;
  /** Provide a cols attribute for the textarea */
  cols?: number;
  /** Provide a disabled state for the textarea */
  disabled?: boolean;
  /** Provide a name for the textarea */
  id: string;
  /** Provide a label text for the textarea */
  label: string;
  /** Provide a maxlength attribute for the textarea */
  maxLength?: number;
  /** Provide a minlength attribute for the textarea */
  minLength?: number;
  /** Provide a onChange handler for the textarea */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Provide a placeholder for the textarea */
  placeholder: string;
  /** Provide a readonly state for the textarea */
  readOnly?: boolean;
  /** Provide a required state for the textarea */
  required?: boolean;
  /** Provide a resize attribute for the textarea */
  resize?: TextAreaResize;
  /** Provide a rows attribute for the textarea */
  rows?: number;
  /** Provide a value for the textarea */
  value: string;
  /** Provide a wrap attribute for the textarea */
  wrap?: TextAreaWrap;
}

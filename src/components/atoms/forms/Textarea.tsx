import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
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
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  /** Provide a rows attribute for the textarea */
  rows?: number;
  /** Provide a value for the textarea */
  value: string;
  /** Provide a wrap attribute for the textarea */
  wrap?: 'hard' | 'soft';
}

export function Textarea({ label, id, placeholder, value, onChange, ...props }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          {...props}
          rows={4}
          id={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue=""
        />
      </div>
    </div>
  );
}

import React from 'react';
import { TextAreaProps } from './TextArea.types';

export function Textarea({ label, id, placeholder, value, onChange, ...props }: TextAreaProps) {
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

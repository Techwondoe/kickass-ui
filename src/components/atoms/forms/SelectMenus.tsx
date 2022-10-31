import React from 'react';

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Provide an id for the select menus */
  id: string;
  /** Provide label text for the select menus */
  label: string;
  /** Provide options for the select menus */
  options: string[];
}

export function SelectMenus({ id, label, options, ...props }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...props}
        id={id}
        name={id}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Canada">
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}

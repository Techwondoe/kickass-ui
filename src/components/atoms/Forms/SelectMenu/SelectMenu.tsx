import React from 'react';

/**
 * @params id - unique id
 * @params label - label to display above component
 * @params options - list of options available
 */
export interface SelectMenuProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: string[];
}

export function SelectMenu({ id, label, options, ...props }: SelectMenuProps) {
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

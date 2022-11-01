import React from 'react';
import { Typography } from '../../atoms';

export interface SimpleListProps extends React.HTMLAttributes<HTMLInputElement> {
  description?: string;
  notificationMethods: { id: string; title: string }[];
  title: string;
}

export function SimpleList({ title, description, notificationMethods, ...props }: SimpleListProps) {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">{title}</label>
      <Typography>{description}</Typography>
      <fieldset className="mt-4">
        <legend className="sr-only">{title}</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                {...props}
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'email'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium text-gray-700">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>{' '}
      </fieldset>
    </div>
  );
}

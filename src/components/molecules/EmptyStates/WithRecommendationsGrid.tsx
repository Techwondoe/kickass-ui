import React from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Typography, Button, TypographyVariants } from '~/components/atoms';
import { WRGEmptyStateProps } from './EmptyState.types';

export function WRGEmptyState({
  icon,
  title,
  description,
  people,
  formData,
  accesibilityLabel,
  peopleListLabel,
}: WRGEmptyStateProps) {
  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400">{icon}</div>
          <Typography variant={TypographyVariants.H2}>{title}</Typography>
          <Typography>{description}</Typography>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="emails" className="sr-only">
            {formData.label}
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="emails"
              id="emails"
              className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder={formData.label}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                {accesibilityLabel.map((label) => (
                  <option key={label}>{label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <Button>{formData.buttonText}</Button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <Typography variant={TypographyVariants.H3}>{peopleListLabel}</Typography>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                  <span className="block flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">
                      {person.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-gray-500">
                      {person.role}
                    </span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <PlusIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

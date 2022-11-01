import React, { ReactNode } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Typography, Button } from '~/components/atoms';

export interface WREmptyStateProps {
  description: string;
  formData: {
    buttonText: string;
    label: string;
  };
  icon: ReactNode;
  people: {
    imageUrl: string;
    name: string;
    role: string;
  }[];
  peopleListLabel: string;
  title: string;
}

export function WREmptyState({
  icon,
  title,
  description,
  people,
  formData,
  peopleListLabel,
}: WREmptyStateProps) {
  return (
    <div className="mx-auto max-w-lg">
      <div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400">{icon}</div>

          <Typography variant="h2" className="mt-2">
            {title}
          </Typography>
          <Typography className="mt-1">{description}</Typography>
        </div>
        <form action="#" className="mt-6 flex">
          <label htmlFor="email" className="sr-only">
            {formData.label}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={formData.label}
          />
          <Button>{formData.buttonText}</Button>
        </form>
      </div>
      <div className="mt-10">
        <Typography variant="h3">{peopleListLabel}</Typography>
        <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
          {people.map((person, personIdx) => (
            <li key={personIdx} className="flex items-center justify-between space-x-3 py-4">
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <Typography>{person.name}</Typography>
                  <Typography>{person.role}</Typography>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="contained">
                  <PlusIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-900">
                    {' '}
                    Invite <span className="sr-only">{person.name}</span>{' '}
                  </span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

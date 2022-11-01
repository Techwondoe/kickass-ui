import React from 'react';
import { Typography } from '~/components/atoms';

interface People {
  email: string;
  imageUrl: string;
  name: string;
  role: string;
}

export interface HorizontalLinkCardsProps {
  people: People[];
}

export function HorizontalLinkCards({ people }: HorizontalLinkCardsProps) {
  return (
    <div>
      {people &&
        people.map((person) => (
          <div
            key={person.email}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <Typography>{person.name}</Typography>
                <Typography>{person.role}</Typography>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

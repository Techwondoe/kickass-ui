import React from 'react';
import { Typography } from '~/components/atoms';
import { classNames } from '~/helpers/class-merger';
import { SimpleGridListProps } from './GridList.types';

export function SimpleCards({ projects }: SimpleGridListProps) {
  return (
    <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
          <div
            className={classNames(
              project.bgColor,
              'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
            )}>
            {project.initials}
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                {project.name}
              </a>
              <Typography>{project.members} Members</Typography>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

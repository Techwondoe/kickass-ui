import React from 'react';
import { Typography, TypographyVariants } from '~/components/atoms';
import { classNames } from '~/helpers/class-merger';
import { EmptyStateWithLinkProps } from './EmptyState.types';

export function WithStartingPoints({
  title,
  description,
  items,
  externalLink,
}: EmptyStateWithLinkProps) {
  return (
    <div>
      <Typography variant={TypographyVariants.H2}>{title}</Typography>
      <Typography>{description}</Typography>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-t border-b border-gray-200 py-6 sm:grid-cols-2">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <Typography variant={TypographyVariants.H3}>
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </Typography>
                <Typography>{item.description}</Typography>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a
          href={externalLink.href}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {externalLink.label}
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Typography } from '~/components/atoms';

export interface WTEmptyStateProps {
  description: string;
  externalLink: {
    href: string;
    label: string;
  };
  items: {
    description: string;
    href: string;
    icon: React.ElementType;
    iconColor: string;
    name: string;
  }[];
  title: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function WTEmptyState({ title, description, items, externalLink }: WTEmptyStateProps) {
  return (
    <div className="mx-auto max-w-lg">
      <Typography variant="h2">{title}</Typography>
      <Typography>{description}</Typography>
      <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="group relative flex items-start space-x-3 py-4">
              <div className="flex-shrink-0">
                <span
                  className={classNames(
                    item.iconColor,
                    'inline-flex items-center justify-center h-10 w-10 rounded-lg'
                  )}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a href={item.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.name}
                  </a>
                </div>
                <Typography>{item.description}</Typography>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
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

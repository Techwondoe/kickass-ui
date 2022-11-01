import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { Typography } from '../../atoms';

export interface StatsWithBrandIconProps {
  stats: {
    change: string;
    changeType: string;
    icon: React.ElementType;
    id: number;
    name: string;
    stat: string;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function StatsWithBrandIcon({ stats }: StatsWithBrandIconProps) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.id}
          className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-indigo-500 rounded-md p-3">
              <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <Typography className="ml-16">{item.name}</Typography>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <Typography>{item.stat}</Typography>
            <Typography
              className={classNames(
                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                'ml-2 flex items-baseline'
              )}>
              {item.changeType === 'increase' ? (
                <ArrowUpIcon
                  className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by
              </span>
              {item.change}
            </Typography>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  {' '}
                  View all
                  <span className="sr-only"> {item.name} stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}

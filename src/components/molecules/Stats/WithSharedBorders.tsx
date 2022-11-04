import React from 'react';
import { classNames } from '~/helpers/class-merger';
import { StatItemChangeType, StatsWithSharedBordersProps } from './Stats.types';

export function StatsWithSharedBorders({ stats }: StatsWithSharedBordersProps) {
  return (
    <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      {stats.map((item) => (
        <div key={item.name} className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">{item.name}</dt>
          <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {item.stat}
              <span className="ml-2 text-sm font-medium text-gray-500">
                from {item.previousStat}
              </span>
            </div>

            <div
              className={classNames(
                item.changeType === StatItemChangeType.INCREASE
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
              )}>
              <span className="sr-only">
                {item.changeType === StatItemChangeType.INCREASE ? 'Increased' : 'Decreased'} by
              </span>
              {item.change}
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}

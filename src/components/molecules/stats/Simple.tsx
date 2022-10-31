import React from 'react';

/* This example requires Tailwind CSS v2.0+ */
export interface Props {
  stats: { name: string; stat: string }[];
}

export function Simple({ stats }: Props) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.name}
          className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
          <dd className="mt-1 text-3xl tracking-tight font-semibold text-gray-900">{item.stat}</dd>
        </div>
      ))}
    </dl>
  );
}

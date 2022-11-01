import React, { ReactNode } from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { Typography } from '~/components/atoms';

export interface DescriptionListProps {
  attachments?: {
    items: {
      actionLabel: string;
      attachmentIcon?: ReactNode;
      label: string;
    }[];
    label: string;
  };
  description: string;
  striped?: boolean;
  tableData: {
    label: string;
    value: string;
  }[];
  title: string;
}

export function DescriptionList({
  title,
  description,
  tableData,
  attachments,
  striped = false,
}: DescriptionListProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className={`${!striped && `sm:divide-y sm:divide-gray-200`}`}>
          {tableData.map((item, index) => (
            <div
              key={item.label}
              className={`${
                striped && index % 2 === 0 && `bg-gray-50`
              } py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6`}>
              <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.value}</dd>
            </div>
          ))}
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">{attachments?.label}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200">
                {attachments?.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1 truncate">{item.label}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        {item.actionLabel}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

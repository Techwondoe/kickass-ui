/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

export interface Props {
  mailingLists: {
    description: string;
    id: number;
    title: string;
    users: string;
  }[];
  title: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Cards({ title, mailingLists }: Props) {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0]);

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">{title}</RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }>
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500">
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900">
                      {mailingList.users}
                    </RadioGroup.Description>
                  </span>
                </span>
                {/* <CheckCircleIcon
                  className={classNames(
                    !checked ? 'invisible' : '',
                    'h-5 w-5 text-indigo-600'
                  )}
                  aria-hidden="true"
                /> */}
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

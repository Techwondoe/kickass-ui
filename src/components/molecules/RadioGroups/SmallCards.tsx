import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Typography } from '../../atoms';
import { classNames } from '~/helpers/class-merger';

export interface SmallCardsProps {
  details: string;
  label: string;
  memoryOptions: {
    inStock: boolean;
    name: string;
  }[];
}

export function SmallCards({ label, details, memoryOptions }: SmallCardsProps) {
  const [mem, setMem] = useState(memoryOptions[2]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Typography variant="h2">{label}</Typography>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {details}
        </a>
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2">
        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  option.inStock
                    ? 'cursor-pointer focus:outline-none'
                    : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                  checked
                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!option.inStock}>
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

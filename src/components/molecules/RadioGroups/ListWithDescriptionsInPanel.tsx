import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '~/helpers/class-merger';

export interface ListWithDescriptionsInPanelProps {
  label: string;
  settings: {
    description: string;
    name: string;
  }[];
}

export function ListWithDescriptionsInPanel({ label, settings }: ListWithDescriptionsInPanelProps) {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only"> {label} </RadioGroup.Label>
      <div className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }>
            {({ active, checked }) => (
              <div>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true">
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <span className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'block text-sm font-medium'
                    )}>
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-700' : 'text-gray-500',
                      'block text-sm'
                    )}>
                    {setting.description}
                  </RadioGroup.Description>
                </span>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

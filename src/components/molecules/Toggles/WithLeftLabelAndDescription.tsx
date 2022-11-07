import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from '~/helpers/class-merger';
import { ToggleModuleProps } from './Toggles.types';

export function WithLeftLabelAndDescription({ label, details, onToggle }: ToggleModuleProps) {
  const [enabled, setEnabled] = useState<boolean>(false);
  const onChange = (value: boolean) => {
    setEnabled(value);
    onToggle(value);
  };
  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
          {label}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {details}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        )}>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  );
}

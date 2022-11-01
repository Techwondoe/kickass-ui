import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ToggleModuleProps } from './WithLeftLabelAndDescription';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function WithRightLabel({ label, details }: ToggleModuleProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
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
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className="text-sm text-gray-500">{details}</span>
      </Switch.Label>
    </Switch.Group>
  );
}
WithRightLabel.defaultProps = {
  details: undefined,
};

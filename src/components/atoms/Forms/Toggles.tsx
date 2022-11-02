import React, { useState, HTMLAttributes } from 'react';
import { Switch } from '@headlessui/react';
import { ColorCodes } from '~/constants/types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  color?: ColorCodes;
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
}

export function Toggles({
  color = ColorCodes.PRIMARY,
  checked,
  disabled,
  id,
  name,
  label,
}: ToggleProps) {
  {
    const [enabled, setEnabled] = useState(false);

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
      <div className="flex items-center cursor-pointer">
        <Switch
          id={id}
          checked={checked}
          onChange={() => setEnabled(!enabled)}
          disabled={disabled}
          name={name}
          className={classNames(
            enabled ? `bg-${color}` : 'bg-secondary',
            `group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full`
          )}>
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-full w-full rounded-md bg-surface"
          />
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? `bg-${color}` : 'bg-secondary',
              'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
            )}
          />
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              `pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-secondary bg-surface shadow ring-0 transition-transform duration-200 ease-in-out hover:drop-shadow-xl`
            )}
          />
        </Switch>
        <label htmlFor={id} className={`ml-3 block text-sm font-medium ${disabledClasses}`}>
          {label}
        </label>
      </div>
    );
  }
}

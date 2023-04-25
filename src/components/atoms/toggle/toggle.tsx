import React, { FC, useState } from 'react';
import { ToggleProps, toggleSize, nobSize } from './toggle.types';

export const Toggle: FC<ToggleProps> = ({
  defaultEnabled = false,
  enabled: enabledProp,
  onChange,
  color = 'primary',
  disabled = false,
  size = 'md',
  className = '',
}) => {
  const [internalEnabled, setInternalEnabled] = useState(defaultEnabled);
  let enabled = internalEnabled;
  let toggleValue = () => setInternalEnabled((prev) => !prev);
  if (enabledProp !== undefined) {
    enabled = enabledProp;
    toggleValue = () => onChange?.(!enabled);
  }

  return (
    <div
      className={`${toggleSize[size]} flex flex-row items-center cursor-pointer ${
        enabled ? 'justify-end' : 'justify-start'
      } ${
        disabled
          ? `bg-gray-100`
          : enabled
          ? `bg-${color}-600 ring-${color}-100 focus:ring-4`
          : `bg-gray-200 ring-gray-100 focus:bg-gray-50 focus:ring-4`
      }  rounded-full ${className}`}
      onClick={toggleValue}>
      <div className={`${nobSize[size]} bg-white rounded-full`} />
    </div>
  );
};

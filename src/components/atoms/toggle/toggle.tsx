import React, { FC, useState } from 'react';
import { ColorType } from '../../../types/colors';

interface ToggleProps {
  color?: ColorType;
  defaultEnabled?: boolean;
  disabled?: boolean;
  enabled?: boolean;
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}

const toggleSize = {
  sm: 'w-9 h-5 p-0.5',
  md: 'w-11 h-6 p-0.5',
  lg: 'w-14 h-8 p-1',
};

const nobSize = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const Toggle: FC<ToggleProps> = ({
  defaultEnabled = false,
  enabled: enabledProp,
  onChange,
  color = 'primary',
  disabled = false,
  size = 'md',
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
      }  rounded-full`}
      onClick={toggleValue}>
      <div className={`${nobSize[size]} bg-white rounded-full`} />
    </div>
  );
};

export default Toggle;

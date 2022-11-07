import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '~/helpers/class-merger';
import { RadioColorPickerProps } from './RadioGroups.types';

export function ColorPicker({ label, colors }: RadioColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState(colors[1]);

  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
        {label}
      </RadioGroup.Label>
      <div className="mt-4 flex items-center space-x-3">
        {colors.map((color) => (
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              classNames(
                color.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }>
            <RadioGroup.Label as="span" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(
                color.bgColor,
                'h-8 w-8 border border-black border-opacity-10 rounded-full'
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ColorCodes } from '~/components/atoms/atoms.types';

export interface AccordionData {
  content: string;
  title: string;
}

export interface AccordionProps {
  accordoinData: AccordionData[];
  contentColor?: ColorCodes;
  titleColor?: ColorCodes;
}

export function Accordion({
  titleColor = 'primary',
  accordoinData,
  contentColor = 'secondary',
}: AccordionProps) {
  return (
    <div>
      {accordoinData &&
        accordoinData.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="mb-2">
                <Disclosure.Button className="flex justify-between w-full font-medium text-left">
                  <span className={`text-${titleColor}`}>{item.title}</span>
                  <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5`} />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0">
                  <Disclosure.Panel static className={`text-${contentColor}`}>
                    {item.content}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
    </div>
  );
}

import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Button, ButtonVariants } from '../../atoms';

export interface SimpleAlertProps {
  actions: {
    label: string;
    onClick: () => void;
  }[];
  description: string;
  dismissButton?: boolean;
  grayFooter?: boolean;
  leftAlignedButtons?: boolean;
  title: string;
}

export function SimpleAlert({
  title,
  description,
  actions,
  dismissButton,
  grayFooter,
  leftAlignedButtons,
}: SimpleAlertProps) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel
                className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${
                  !grayFooter && `px-4 pt-5 pb-4 sm:p-6`
                }`}>
                <div className={`${grayFooter && `bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}`}>
                  {dismissButton && (
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <Button variant={ButtonVariants.CONTAINED} onClick={() => setOpen(false)}>
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                  )}
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    grayFooter
                      ? `bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`
                      : leftAlignedButtons
                      ? `mt-5 sm:mt-4 sm:ml-10 sm:flex sm:pl-4`
                      : `mt-5 sm:mt-4 sm:flex sm:flex-row-reverse`
                  }`}>
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={index === 0 ? ButtonVariants.CONTAINED : ButtonVariants.OUTLINED}>
                      {action.label}
                    </Button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

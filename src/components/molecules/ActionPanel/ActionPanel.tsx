import React from 'react';
import { Button, Typography } from '~/components/atoms';

export interface ActionPanelProps {
  button?: {
    label: string;
    onClick: () => void;
  };
  buttonRight?: {
    label: string;
    onClick: () => void;
  };
  description: string;
  link?: {
    href: string;
    label: string;
  };
  title: string;
}

export function ActionPanel({ title, description, button, link, buttonRight }: ActionPanelProps) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <Typography variant="h3">{title}</Typography>
        <div className={`${buttonRight && `sm:flex sm:items-start sm:justify-between`}`}>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <Typography>{description}</Typography>
          </div>
          {button && (
            <div className="mt-5">
              <Button variant="contained" className="sm:text-sm">
                {button.label}
              </Button>
            </div>
          )}

          {link && (
            <div className="mt-3 text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Learn more about our CI features
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          )}

          {buttonRight && (
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
              <Button className="sm:text-sm">Change plan</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

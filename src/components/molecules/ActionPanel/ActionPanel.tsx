import React from 'react';
import { Button, ButtonVariants, Typography, TypographyVariants } from '~/components/atoms';
import { ActionPanelProps } from './ActionPanel.types';

export function ActionPanel({ title, description, button, link, buttonRight }: ActionPanelProps) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <Typography variant={TypographyVariants.H3}>{title}</Typography>
        <div className={`${buttonRight && `sm:flex sm:items-start sm:justify-between`}`}>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <Typography>{description}</Typography>
          </div>
          {button && (
            <div className="mt-5">
              <Button
                onClick={button.onClick}
                variant={ButtonVariants.CONTAINED}
                className="sm:text-sm">
                {button.label}
              </Button>
            </div>
          )}

          {link && (
            <div className="mt-3 text-sm">
              <a href={link.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                {link.label}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          )}

          {buttonRight && (
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
              <Button onClick={buttonRight.onClick} className="sm:text-sm">
                {buttonRight.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

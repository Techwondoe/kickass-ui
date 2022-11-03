import React from 'react';
import { Typography, TypographyVariants } from '../../atoms';

export interface ListWithRadioOnRightProps extends React.HTMLAttributes<HTMLInputElement> {
  accounts: { description: string; id: string; name: string }[];
  description?: string;
  title: string;
}

export function ListWithRadioOnRight({
  title,
  description,
  accounts,
  ...props
}: ListWithRadioOnRightProps) {
  return (
    <div>
      <Typography variant={TypographyVariants.H2}>{title}</Typography>
      <Typography>{description}</Typography>
      <fieldset className="mt-2">
        <legend className="sr-only">Bank account</legend>
        <div className="divide-y divide-gray-200">
          {accounts.map((account, accountIdx) => (
            <div key={accountIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label htmlFor={`account-${account.id}`} className="font-medium text-gray-700">
                  {account.name}
                </label>
                <Typography id={`account-${account.id}-description`}>
                  {account.description}
                </Typography>
              </div>
              <div className="ml-3 flex h-5 items-center">
                <input
                  {...props}
                  id={`account-${account.id}`}
                  aria-describedby={`account-${account.id}-description`}
                  name="account"
                  type="radio"
                  defaultChecked={account.id === 'checking'}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

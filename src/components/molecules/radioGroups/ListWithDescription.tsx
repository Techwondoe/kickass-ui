import React from 'react';
import { Typography } from '../../atoms';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  plans: { description: string; id: string; name: string }[];
  title: string;
}

export function ListWithDescription({ title, plans, ...props }: Props) {
  return (
    <fieldset>
      <legend className="sr-only">{title}</legend>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                {...props}
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="plan"
                type="radio"
                defaultChecked={plan.id === 'small'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={plan.id} className="font-medium text-gray-700">
                {plan.name}
              </label>
              <Typography id={`${plan.id}-description`}>{plan.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

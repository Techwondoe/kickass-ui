import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Typography, ColorCodes, Button } from '~/components/atoms';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  actions?: {
    label: string;
    onClick: () => void;
  }[];
  closeIcon?: boolean;
  color?: ColorCodes;
  description?: string[];
  title?: string;
}
export function Alert({
  color = 'success',
  title,
  description,
  actions,
  closeIcon,
  Icon,
  ...restProps
}: AlertProps) {
  const iconDisplay = Icon && <Icon className={` w-5 h-5 mr-2 mt-2 text-${color}`} />;
  return (
    <div className={`w-{1/2} p-4 bg-${color}/20 text-contrast-${color}`} {...restProps}>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex-shrink-0">{iconDisplay}</div>
          <div className="ml-3">
            <Typography variant="h3">{title}</Typography>
            {description && (
              <div
                className={`mt-2 text-sm text-${color}
            `}>
                {description.length > 1 ? (
                  <ul role="list" className="pl-5 space-y-1 list-disc">
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <Typography>{description[0]}</Typography>
                )}
              </div>
            )}
            {actions && (
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex space-x-2">
                  {actions.map((action, index) => (
                    <Button color={color} key={index} onClick={action.onClick}>
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {closeIcon && (
          <div className="pl-3 ml-auto">
            <div className="-mx-1.5 -my-1.5">
              <Button color={color}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

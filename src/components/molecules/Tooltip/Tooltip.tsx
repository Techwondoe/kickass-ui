import React, { forwardRef, useState } from 'react';

export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> & {
  children: React.ReactElement;
  className?: string;
  message: string;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ message, children, className, ...restProps }): JSX.Element => {
    const [tooltipStatus, setTooltipStatus] = useState(0);

    return (
      <div
        className="flex flex-col items-center justify-center md:flex-row md:justify-center"
        {...restProps}>
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}>
          {children}
          {tooltipStatus == 1 && (
            <div
              role="tooltip"
              className={`absolute top-12 right-30 w-32 text-center p-0 items-center z-20 transition duration-150 ease-in-out mx-auto shadow-lg bg-secondary rounded ${className}`}>
              <p className={`text-xs font-bold text-surface p-1`}>{message}</p>
            </div>
          )}{' '}
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

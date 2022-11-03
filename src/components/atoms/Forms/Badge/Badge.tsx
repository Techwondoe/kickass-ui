import React from 'react';
import { ColorCodes } from '~/constants/types';

/**
 * @params backgroundColor - Background color for badge
 * @params color - Text color for badge
 * @params label - Text within badge
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  backgroundColor?: ColorCodes;
  color?: ColorCodes;
  label: string;
}

export function Badge({ label, color, backgroundColor, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={`inline-flex items-center rounded-full bg-${backgroundColor} px-2.5 py-0.5 text-xs font-medium text-${color}`}>
      {label}
    </span>
  );
}

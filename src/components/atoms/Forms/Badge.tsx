import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Provide a background color for the badge */
  backgroundColor?: string;
  /** Provide a color for the badge */
  color?: string;
  /** Provide a label for the badge */
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
Badge.defaultProps = {
  color: '',
  backgroundColor: '',
};

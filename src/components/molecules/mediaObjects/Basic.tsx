import React from 'react';
import { Typography } from '../../atoms';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'center' | 'bottom' | 'stretched';
  body: string;
  heading: string;
  imgSrc: string;
}

/* This example requires Tailwind CSS v2.0+ */
export function Basic({ imgSrc, heading, body, align }: Props) {
  return (
    <div className="flex">
      <div
        className={`mr-4 flex-shrink-0 ${
          align === 'center' ? 'self-center' : align === 'bottom' && 'self-end'
        }`}>
        <img
          className={`${align === 'stretched' ? 'h-full object-cover' : 'h-16'} w-16`}
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="space-y-2">
        <Typography variant="h4">{heading}</Typography>
        <Typography>{body}</Typography>
      </div>
    </div>
  );
}

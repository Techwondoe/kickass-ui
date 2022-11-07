import React from 'react';
import { Typography, TypographyVariants } from '~/components/atoms';
import { MediaObjectProps } from './MediaObjects.types';

export function MediaObjects({ imgSrc, heading, body, align }: MediaObjectProps) {
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
        <Typography variant={TypographyVariants.H4}>{heading}</Typography>
        <Typography>{body}</Typography>
      </div>
    </div>
  );
}

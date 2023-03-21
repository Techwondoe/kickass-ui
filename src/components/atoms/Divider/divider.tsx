import React, { FC } from 'react';
import { DividerProps } from './divider.types';


export const Divider: FC<DividerProps> = ({ color = 'gray-200', className = '' }) => {
  return <div className={`h-[1px] bg-${color} ${className}`} />;
};

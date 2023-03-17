import React, { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="border rounded-md shadow-sm">{children}</div>;
}

import React from 'react';
import { Button, Typography } from '../../atoms';
// import {Button} from '../../atoms';
/* This example requires Tailwind CSS v2.0+ */

export interface Props {
  headingText: string;
}

export function WithActions({ headingText }: Props) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <Typography variant="h2">{headingText}</Typography>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4 space-x-2">
        {/* <Button variant='white'>Edit</Button> */}
        <Button>Edit</Button>
        <Button>Publish</Button>
      </div>
    </div>
  );
}

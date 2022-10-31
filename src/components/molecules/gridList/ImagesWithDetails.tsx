import React from 'react';
import { Typography } from '../../atoms';

export interface Props {
  files: {
    size: string;
    source: string;
    title: string;
  }[];
}

export function ImagesWithDetails({ files }: Props) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.source}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <Typography className="pointer-events-none block">{file.title}</Typography>
          <Typography className="pointer-events-none block">{file.size}</Typography>
        </li>
      ))}
    </ul>
  );
}

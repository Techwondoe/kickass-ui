import React from 'react';
import { Typography, TypographyVariants } from '~/components/atoms';
import { FeedsWithAvatarsProps } from './Feeds.types';

export function FeedsWithAvatars({ activityItems }: FeedsWithAvatarsProps) {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <Typography variant={TypographyVariants.H3}>
                    {activityItem.person.name}
                  </Typography>
                  <Typography>{activityItem.time}</Typography>
                </div>
                <Typography>
                  Deployed {activityItem.project} ({activityItem.commit} in master) to{' '}
                  {activityItem.environment}
                </Typography>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

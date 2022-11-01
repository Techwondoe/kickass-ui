import React from 'react';
import { Typography } from '~/components/atoms';

interface People {
  imageUrl: string;
  name: string;
}

interface ActivityItems {
  commit: string;
  environment: string;
  id: number;
  person: People;
  project: string;
  time: string;
}

export interface FeedsWithAvatarsProps {
  activityItems: ActivityItems[];
}

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
                  <Typography variant="h3">{activityItem.person.name}</Typography>
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

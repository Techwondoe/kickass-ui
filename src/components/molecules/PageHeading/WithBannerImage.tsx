import React from 'react';
import { Avatar } from '../../atoms/forms/Avatar';
import { Button, ButtonSizes, Typography, TypographyVariants } from '../../atoms';

export interface PageHeadingWithBannerProps {
  actions: {
    buttonText: string;
    icon: React.ElementType;
  }[];
  profile: {
    avatar: string;
    backgroundImage: string;
    email: string;
    fields: string[][];
    name: string;
  };
}

export function PageHeadingWithBannerImage({ actions, profile }: PageHeadingWithBannerProps) {
  return (
    <div>
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Avatar
              src={profile.avatar}
              alt="avatar"
              size="xxxl"
              className="ring-4 ring-white sm:h-32 sm:w-32"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <Typography variant={TypographyVariants.H1}>{profile.name}</Typography>
            </div>
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {actions.map((action, index) => (
                <Button key={index} size={ButtonSizes.SMALL}>
                  <action.icon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>{action.buttonText}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <Typography variant={TypographyVariants.H1}>{profile.name}</Typography>
        </div>
      </div>
    </div>
  );
}

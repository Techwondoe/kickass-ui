import React from 'react';
import { Avatar } from '../../atoms/Forms/Avatar/Avatar';
import { Button, ButtonVariants, Typography, TypographyVariants } from '../../atoms';
import { AvatarSizes } from '~/components/atoms/Forms/Avatar';
import { PageHeadingWithAvatarAndActionProps } from './PageHeading.types';

export function PageHeadingWithAvatarAndActions({
  actions,
  profile,
}: PageHeadingWithAvatarAndActionProps) {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <Avatar src={profile.avatar} alt="avatar" size={AvatarSizes.XL} />
            <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <Typography variant={TypographyVariants.H1}>Ricardo Cooper</Typography>
          <Typography>
            Applied for{' '}
            <a href="#" className="text-gray-900">
              {profile.appliedFor}
            </a>{' '}
            on <time dateTime="2020-08-25">{profile.date}</time>
          </Typography>
        </div>
      </div>
      <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.active ? ButtonVariants.CONTAINED : ButtonVariants.OUTLINED}>
            {action.buttonText}
          </Button>
        ))}
      </div>
    </div>
  );
}

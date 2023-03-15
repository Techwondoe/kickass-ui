import React, { FC } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Typography, TypographySizeType } from '../Typography/Typography';

export interface UserProfileProps {
  avatar?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  subTitle: string;
}

const nameSizes = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
};

const roleSizes = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'md',
};

export const UserProfile: FC<UserProfileProps> = ({
  name,
  subTitle,
  avatar,
  status = 'away',
  size = 'md',
}) => {
  const avatarImage = 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4';

  return (
    <div className="flex flex-grow gap-3">
      {avatar !== undefined && (
        <Avatar
          src={avatarImage}
          name={name}
          status={status}
          size={size}
          type={avatar && avatarImage ? 'image' : 'placeholder'}
        />
      )}
      <div className="flex-1 flex flex-col">
        <Typography size={nameSizes[size] as TypographySizeType} weight="medium" color="gray-700">
          {name}
        </Typography>
        <Typography size={roleSizes[size] as TypographySizeType} color="gray-500">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default UserProfile;

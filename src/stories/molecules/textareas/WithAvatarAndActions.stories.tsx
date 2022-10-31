import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FireIcon,
  HeartIcon,
  FaceSmileIcon,
  FaceFrownIcon,
  HandThumbUpIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import {
  WithAvatarAndActions,
  Props,
} from '../../../components/molecules/textareas/WithAvatarAndActions';

const meta: Meta = {
  argTypes: {
    avatarSrc: {
      defaultValue:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    buttonText: {
      defaultValue: 'Post',
    },
    label: {
      defaultValue: 'Add your comment',
    },
    moods: {
      defaultValue: [
        {
          bgColor: 'bg-red-500',
          icon: FireIcon,
          iconColor: 'text-white',
          name: 'Excited',
          value: 'excited',
        },
        {
          bgColor: 'bg-pink-400',
          icon: HeartIcon,
          iconColor: 'text-white',
          name: 'Loved',
          value: 'loved',
        },
        {
          bgColor: 'bg-green-400',
          icon: FaceSmileIcon,
          iconColor: 'text-white',
          name: 'Happy',
          value: 'happy',
        },
        {
          bgColor: 'bg-yellow-400',
          icon: FaceFrownIcon,
          iconColor: 'text-white',
          name: 'Sad',
          value: 'sad',
        },
        {
          bgColor: 'bg-blue-500',
          icon: HandThumbUpIcon,
          iconColor: 'text-white',
          name: 'Thumbsy',
          value: 'thumbsy',
        },
        {
          bgColor: 'bg-transparent',
          icon: XMarkIcon,
          iconColor: 'text-gray-400',
          name: 'I feel nothing',
          value: null,
        },
      ],
    },
    placeholder: {
      defaultValue: 'Add your comment...',
    },
  },
  component: WithAvatarAndActions,
  title: 'Textareas/With avatar and actions',
};

export default meta;

const Template: Story<Props> = (args) => <WithAvatarAndActions {...args} />;

export const Default = Template.bind({});

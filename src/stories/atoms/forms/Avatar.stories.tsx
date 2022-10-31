import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, Props } from '../../../components/atoms/forms/Avatar';

const meta: Meta = {
  title: 'Forms/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      defaultValue:
        'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  src: 'https://avatars.githubusercontent.com/u/75943412?v=4',
  size: 'xl',
  currentStatus: 'online',
};

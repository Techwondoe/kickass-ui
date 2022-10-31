import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleList, Props } from '../../../components/molecules/radioGroups/SimpleList';

const meta: Meta = {
  title: 'Radio Groups/Simple list',
  component: SimpleList,
  argTypes: {
    title: {
      defaultValue: 'Notification method',
    },

    description: {
      defaultValue: 'How do you prefer to receive notifications?',
    },

    notificationMethods: {
      defaultValue: [
        { id: 'email', title: 'Email' },
        { id: 'sms', title: 'Phone (SMS)' },
        { id: 'push', title: 'Push notification' },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SimpleList {...args} />;

export const Default = Template.bind({});

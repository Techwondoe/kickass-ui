import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  WithAvatarAndActions,
  Props,
} from '../../../components/molecules/pageHeadings/WithAvatarAndActions';

const meta: Meta = {
  title: 'Page headings/With avatar and actions',
  component: WithAvatarAndActions,
  argTypes: {
    actions: {
      defaultValue: [
        {
          buttonText: 'Disqualify',
        },
        {
          buttonText: 'Advance to offer',
          active: true,
        },
      ],
    },
    profile: {
      defaultValue: {
        name: 'Ricardo Cooper',
        avatar:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        appliedFor: 'Front End Developer',
        date: 'August 25, 2020',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithAvatarAndActions {...args} />;

export const Default = Template.bind({});

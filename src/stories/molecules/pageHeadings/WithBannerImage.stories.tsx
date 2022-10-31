import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { WithBannerImage, Props } from '../../../components/molecules/pageHeadings/WithBannerImage';

const meta: Meta = {
  title: 'Page headings/With banner image',
  component: WithBannerImage,
  argTypes: {
    actions: {
      defaultValue: [
        {
          buttonText: 'Message',
          icon: EnvelopeIcon,
        },
        {
          buttonText: 'Call',
          icon: PhoneIcon,
        },
      ],
    },
    profile: {
      defaultValue: {
        avatar:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        backgroundImage:
          'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        email: 'ricardo.cooper@example.com',
        fields: [
          ['Phone', '(555) 123-4567'],
          ['Email', 'ricardocooper@example.com'],
          ['Title', 'Senior Front-End Developer'],
          ['Team', 'Product Development'],
          ['Location', 'San Francisco'],
          ['Sits', 'Oasis, 4th floor'],
          ['Salary', '$145,000'],
          ['Birthday', 'June 8, 1990'],
        ],
        name: 'Ricardo Cooper',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithBannerImage {...args} />;

export const Default = Template.bind({});

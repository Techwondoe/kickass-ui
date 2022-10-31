import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, Props } from '../../../components/molecules/actionPanels/Simple';

const meta: Meta = {
  title: 'Action Panels/Simple',
  component: Simple,
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Delete your account',
  description: 'Once you delete your account, you will lose all data associated with it.',
  button: {
    label: 'Delete account',
    onClick: () => {},
  },
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Continuous Integration',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad.',
  link: {
    label: 'Learn more about our CI features',
    href: 'manikangkandas.vercel.app',
  },
};

export const WithButtonRight = Template.bind({});
WithButtonRight.args = {
  title: 'Manage subscription',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.',
  buttonRight: {
    label: 'Change plan',
    onClick: () => {},
  },
};

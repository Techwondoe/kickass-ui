import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, Props } from '../../../components/molecules/tables/Simple';

const meta: Meta = {
  title: 'Table/Simple',
  component: Simple,
  argTypes: {
    title: {
      defaultValue: 'Users',
    },
    description: {
      defaultValue:
        'A list of all the users in your account including their name, title, email and role.',
    },
    buttonText: {
      defaultValue: 'Add user',
    },
    people: {
      defaultValue: [
        {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          email: 'lindsay.walton@example.com',
          role: 'Member',
        },
        {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          email: 'lindsay.walton@example.com',
          role: 'Member',
        },
        {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          email: 'lindsay.walton@example.com',
          role: 'Member',
        },
        {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          email: 'lindsay.walton@example.com',
          role: 'Member',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
export const WithUpperCaseTableHeader = Template.bind({});
WithUpperCaseTableHeader.args = {
  upperCaseTableHeader: true,
};

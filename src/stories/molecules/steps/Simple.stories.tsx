import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, Props } from '../../../components/molecules/steps/Simple';

const meta: Meta = {
  title: 'Steps/Simple',
  component: Simple,
  argTypes: {
    steps: {
      defaultValue: [
        { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
        {
          id: 'Step 2',
          name: 'Application form',
          href: '#',
          status: 'current',
        },
        { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});

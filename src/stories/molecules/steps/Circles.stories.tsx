import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Circles, Props } from '../../../components/molecules/steps/Circles';

const meta: Meta = {
  title: 'Steps/Circles',
  component: Circles,
  argTypes: {
    steps: {
      defaultValue: [
        { name: 'Step 1', href: '#', status: 'complete' },
        { name: 'Step 2', href: '#', status: 'complete' },
        { name: 'Step 3', href: '#', status: 'current' },
        { name: 'Step 4', href: '#', status: 'upcoming' },
        { name: 'Step 5', href: '#', status: 'upcoming' },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Circles {...args} />;

export const Default = Template.bind({});

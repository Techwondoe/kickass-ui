import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panels, Props } from '../../../components/molecules/steps/Panels';

const meta: Meta = {
  title: 'Steps/Panels',
  component: Panels,
  argTypes: {
    steps: {
      defaultValue: [
        { id: '01', name: 'Job details', href: '#', status: 'complete' },
        { id: '02', name: 'Application form', href: '#', status: 'current' },
        { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Panels {...args} />;

export const Default = Template.bind({});

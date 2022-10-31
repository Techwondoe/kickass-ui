import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, Props } from '../../../components/molecules/stats/Simple';

const meta: Meta = {
  title: 'stats/Simple',
  component: Simple,
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ],
};

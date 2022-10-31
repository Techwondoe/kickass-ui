import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WithSharedBorders, Props } from '../../../components/molecules/stats/WithSharedBorders';

const meta: Meta = {
  title: 'stats/With shared borders',
  component: WithSharedBorders,
};

export default meta;

const Template: Story<Props> = (args) => <WithSharedBorders {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      change: '12%',
      changeType: 'increase',
      name: 'Total Subscribers',
      previousStat: '70,946',
      stat: '71,897',
    },
    {
      change: '2.02%',
      changeType: 'increase',
      name: 'Avg. Open Rate',
      previousStat: '56.14%',
      stat: '58.16%',
    },
    {
      change: '4.05%',
      changeType: 'decrease',
      name: 'Avg. Click Rate',
      previousStat: '28.62%',
      stat: '24.57%',
    },
  ],
};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CogIcon, TvIcon, UsersIcon } from '@heroicons/react/20/solid';
import { WithBrandIcon, Props } from '../../../components/molecules/stats/WithBrandIcon';

const meta: Meta = {
  title: 'stats/With brand icon',
  component: WithBrandIcon,
};

export default meta;

const Template: Story<Props> = (args) => <WithBrandIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      change: '122',
      changeType: 'increase',
      icon: UsersIcon,
      id: 1,
      name: 'Total Subscribers',
      stat: '71,897',
    },
    {
      change: '5.4%',
      changeType: 'increase',
      icon: CogIcon,
      id: 2,
      name: 'Avg. Open Rate',
      stat: '58.16%',
    },
    {
      change: '3.2%',
      changeType: 'decrease',
      icon: TvIcon,
      id: 3,
      name: 'Avg. Click Rate',
      stat: '24.57%',
    },
  ],
};

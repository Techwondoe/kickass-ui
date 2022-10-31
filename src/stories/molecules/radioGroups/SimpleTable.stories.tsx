import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleTable, Props } from '../../../components/molecules/radioGroups/SimpleTable';

const meta: Meta = {
  title: 'Radio Groups/Simple table',
  component: SimpleTable,
  argTypes: {
    label: {
      defaultValue: 'Server size',
    },
    plans: {
      defaultValue: [
        {
          name: 'Startup',
          priceMonthly: 29,
          priceYearly: 290,
          limit: 'Up to 5 active job postings',
        },
        {
          name: 'Business',
          priceMonthly: 99,
          priceYearly: 990,
          limit: 'Up to 25 active job postings',
        },
        {
          name: 'Enterprise',
          priceMonthly: 249,
          priceYearly: 2490,
          limit: 'Unlimited active job postings',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SimpleTable {...args} />;

export const Default = Template.bind({});

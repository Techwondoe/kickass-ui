import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedCards, Props } from '../../../components/molecules/radioGroups/StackedCards';

const meta: Meta = {
  argTypes: {
    label: {
      defaultValue: 'Server size',
    },
    plans: {
      defaultValue: [
        {
          cpus: '4 CPUs',
          disk: '160 GB SSD disk',
          name: 'Hobby',
          price: '$40',
          ram: '8GB',
        },
        {
          cpus: '6 CPUs',
          disk: '256 GB SSD disk',
          name: 'Startup',
          price: '$80',
          ram: '12GB',
        },
        {
          cpus: '8 CPUs',
          disk: '512 GB SSD disk',
          name: 'Business',
          price: '$160',
          ram: '16GB',
        },
        {
          cpus: '12 CPUs',
          disk: '1024 GB SSD disk',
          name: 'Enterprise',
          price: '$240',
          ram: '32GB',
        },
      ],
    },
  },
  component: StackedCards,
  title: 'Radio Groups/Stacked cards',
};

export default meta;

const Template: Story<Props> = (args) => <StackedCards {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ListWithDescription,
  Props,
} from '../../../components/molecules/radioGroups/ListWithDescription';

const meta: Meta = {
  title: 'Radio Groups/List with description',
  component: ListWithDescription,
  argTypes: {
    title: {
      defaultValue: 'Plan',
    },

    plans: {
      defaultValue: [
        {
          id: 'small',
          name: 'Small',
          description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
        },
        {
          id: 'medium',
          name: 'Medium',
          description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
        },
        {
          id: 'large',
          name: 'Large',
          description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ListWithDescription {...args} />;

export const Default = Template.bind({});

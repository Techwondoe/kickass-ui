import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SmallCards, Props } from '../../../components/molecules/radioGroups/SmallCards';

const meta: Meta = {
  title: 'Radio Groups/Small cards',
  component: SmallCards,
  argTypes: {
    label: {
      defaultValue: 'RAM',
    },
    details: {
      defaultValue: 'See performance specs',
    },
    memoryOptions: {
      defaultValue: [
        { name: '4 GB', inStock: true },
        { name: '8 GB', inStock: true },
        { name: '16 GB', inStock: true },
        { name: '32 GB', inStock: true },
        { name: '64 GB', inStock: true },
        { name: '128 GB', inStock: false },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SmallCards {...args} />;

export const Default = Template.bind({});

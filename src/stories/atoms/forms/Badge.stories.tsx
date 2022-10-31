import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, Props } from '../../../components/atoms/forms/Badge';

const meta: Meta = {
  title: 'Forms/Badge',
  component: Badge,
  argTypes: {
    label: {
      defaultValue: 'Badge',
    },
    backgroundColor: {
      defaultValue: 'black',
    },
    color: {
      defaultValue: 'green-500',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

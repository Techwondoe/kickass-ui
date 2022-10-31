import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../../../components/atoms/forms/Checkbox';

const meta: Meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'changed' },
    id: {
      defaultValue: 'comments',
    },
    name: {
      defaultValue: 'comments',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  color: 'warning',
};

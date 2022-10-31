import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggles, ToggleProps } from '../../../components/atoms/forms/Toggles';

const meta: Meta = {
  title: 'Forms/Toggles',
  component: Toggles,
  argTypes: {
    onChange: { action: 'changed' },
    id: {
      defaultValue: 'email',
    },
    name: {
      defaultValue: 'Email',
    },
    label: {
      defaultValue: 'Email',
    },
  },
};

export default meta;

const Template: Story<ToggleProps> = (args) => <Toggles {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectMenus, Props } from '../../../components/atoms/forms/SelectMenus';

const meta: Meta = {
  title: 'Forms/Select menus',
  component: SelectMenus,
  argTypes: {
    onChange: { action: 'changed' },
    id: {
      defaultValue: 'country',
    },
    label: {
      defaultValue: 'Country / Region',
    },
    options: {
      defaultValue: ['India', 'New Zealand', 'Canada', 'United States', 'Mexico'],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SelectMenus {...args} />;

export const Default = Template.bind({});

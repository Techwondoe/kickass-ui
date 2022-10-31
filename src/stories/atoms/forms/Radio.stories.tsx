import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, Props } from '../../../components/atoms/forms/Radio';

const meta: Meta = {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {
    id: {
      defaultValue: 'email',
    },
    title: {
      defaultValue: 'Email',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

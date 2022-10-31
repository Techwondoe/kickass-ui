import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Basic, Props } from '../../../components/molecules/buttonGroups/Basic';

const meta: Meta = {
  title: 'Button Groups/Basic',
  component: Basic,
  argTypes: {
    label: {
      control: {
        type: 'inline-check',
        options: ['Button 1', 'Button 2', 'Button 3'],
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Basic {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: ['Button1', 'Button2', 'Button3', 'Button4', 'Button5'],
};

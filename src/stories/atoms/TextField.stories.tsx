import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../../components/atoms/textField';

export default {
  title: 'Forms/Text field',
  component: TextField,
  argTypes: {
    label: {
      defaultValue: 'Label',
    },
    placeholder: {
      defaultValue: 'Placeholder',
    },
    helperText: {
      defaultValue: 'Helper text',
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;
export const Default = Template.bind({});
Default.args = {
  helperText: 'Helper text',
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
};

export const Select = Template.bind({});
Select.args = {
  select: true,
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  className: 'px-12 py-6',
};

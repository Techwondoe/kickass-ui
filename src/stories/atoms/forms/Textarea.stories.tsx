import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Textarea, Props } from '../../../components/atoms/forms/Textarea';

const meta: Meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    onChange: { action: 'textarea changed' },
    label: {
      defaultValue: 'Default label text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled textarea',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  autoFocus: false,
  cols: 50,
  disabled: false,
  id: 'default-value',
  label: 'Default value',
  maxLength: 100,
  minLength: 10,
  onChange: action('textarea changed'),
  placeholder: 'Default placeholder text',
  readOnly: false,
  required: false,
  resize: 'none',
  rows: 4,
  value: 'The quick brown fox jumps over the lazy dog.',
  wrap: 'hard',
};

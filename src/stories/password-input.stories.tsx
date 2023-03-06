import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PasswordInputField } from '../components/atoms/PasswordInput/password-input';

const Story: ComponentMeta<typeof PasswordInputField> = {
  component: PasswordInputField,
  title: 'Forms/PasswordInputField',
};
export default Story;

const Template: ComponentStory<typeof PasswordInputField> = (args) => (
  <PasswordInputField {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  label: 'Name',
  hint: 'This is a hint text to help user.',
};

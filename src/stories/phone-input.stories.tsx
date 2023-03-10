import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PhoneInputField } from '../components/atoms/PhoneInput/phone-input';

const Story: ComponentMeta<typeof PhoneInputField> = {
  component: PhoneInputField,
  title: 'Forms/Phone Input Field',
};
export default Story;

const Template: ComponentStory<typeof PhoneInputField> = (args) => <PhoneInputField {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Phone',
  hint: 'This is a hint text to help user.',
};

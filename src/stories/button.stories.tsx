import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/atoms/Button';
import React from 'react';
const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button CTA',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  icon: 'placeholder',
  color: 'warning',
  label: 'Button CTA',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  color: 'warning',
  endIcon: 'placeholder',
  label: 'Button CTA',
};

export const Online = Template.bind({});
Online.args = {
  color: 'warning',
  label: 'Button CTA',
  online: true,
};

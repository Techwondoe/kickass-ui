import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../../components/atoms';
import { CheckBadgeIcon, HomeIcon } from '@heroicons/react/20/solid';

const meta: Meta = {
  title: 'Forms/Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Techwondoe',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  StartIcon: CheckBadgeIcon,
  children: 'With icon at start',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  EndIcon: HomeIcon,
  children: 'With icon at end',
};

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  className: 'px-12 py-6',
  children: 'With custom classes',
};

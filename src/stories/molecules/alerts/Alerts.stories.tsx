import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alerts, Props } from '../../../components/molecules/alerts/Alerts';
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
const meta: Meta = {
  title: 'Alerts/Alerts',
  component: Alerts,
};
export default meta;
const Template: Story<Props> = (args) => <Alerts {...args} />;
export const Success = Template.bind({});
Success.args = {
  title: 'Order completed',
  description: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
  ],
  Icon: CheckCircleIcon,
  actions: [
    {
      label: 'View status',
      onClick: () => {
        alert('View status');
      },
    },
    {
      label: 'Dismiss',
      onClick: () => {},
    },
  ],
};
export const Warning = Template.bind({});
Warning.args = {
  title: 'Attention needed',
  Icon: ExclamationCircleIcon,
  description: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
  ],
};
export const Error = Template.bind({});
Error.args = {
  title: 'There were 2 errors with your submission',
  Icon: XCircleIcon,
  description: [
    'Your password must be at least 8 characters',
    'Your password must include at least one pro wrestling finishing move',
  ],
};

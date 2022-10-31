import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleAlert, Props } from '../../../components/molecules/modals/SimpleAlert';

const meta: Meta = {
  title: 'Modals/SimpleAlert',
  component: SimpleAlert,
  argTypes: {
    title: {
      defaultValue: 'Deactivate account',
    },
    description: {
      defaultValue:
        'Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.',
    },
    actions: {
      defaultValue: [
        {
          label: 'Deactivate',
          onClick: () => {},
        },
        {
          label: 'Cancel',
          onClick: () => {},
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SimpleAlert {...args} />;

export const Default = Template.bind({});
export const SimpleWithDismissButton = Template.bind({});
SimpleWithDismissButton.args = {
  dismissButton: true,
};
export const SimpleWithGrayFooter = Template.bind({});
SimpleWithGrayFooter.args = {
  grayFooter: true,
};

export const SimpleAlertWithLeftAlignedButtons = Template.bind({});
SimpleAlertWithLeftAlignedButtons.args = {
  leftAlignedButtons: true,
};

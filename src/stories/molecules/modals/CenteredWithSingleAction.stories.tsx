import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  CenteredWithSingleAction,
  Props,
} from '../../../components/molecules/modals/CenteredWithSingleAction';

const meta: Meta = {
  title: 'Modals/CenteredWithSingleAction',
  component: CenteredWithSingleAction,
  argTypes: {
    title: {
      defaultValue: 'Payment successful',
    },
    description: {
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    },
    actions: {
      defaultValue: [
        {
          label: 'Go back to dashboard',
          onClick: () => {},
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <CenteredWithSingleAction {...args} />;

export const Default = Template.bind({});
export const CenteredWithWideButtons = Template.bind({});
CenteredWithWideButtons.args = {
  actions: [
    {
      label: 'Deactivate',
      onClick: () => {},
    },
    {
      label: 'Cancel',
      onClick: () => {},
    },
  ],
};

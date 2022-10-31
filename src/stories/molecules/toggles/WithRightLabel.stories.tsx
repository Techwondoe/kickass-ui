import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WithRightLabel, Props } from '../../../components/molecules/toggles/WithRightLabel';

const meta: Meta = {
  title: 'Toggles/With right label',
  component: WithRightLabel,
  argTypes: {
    label: {
      defaultValue: 'Annual billing',
    },
    details: {
      defaultValue: '(Save 10%)',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithRightLabel {...args} />;

export const Default = Template.bind({});

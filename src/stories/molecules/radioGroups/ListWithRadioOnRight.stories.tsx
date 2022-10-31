import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ListWithRadioOnRight,
  Props,
} from '../../../components/molecules/radioGroups/ListWithRadioOnRight';

const meta: Meta = {
  title: 'Radio Groups/List with radio on right',
  component: ListWithRadioOnRight,
  argTypes: {
    title: {
      defaultValue: 'Transfer funds',
    },
    description: {
      defaultValue: 'Transfer your balance to your bank account.',
    },

    accounts: {
      defaultValue: [
        { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
        {
          id: 'savings',
          name: 'Savings',
          description: 'Bank of America ••••0149',
        },
        {
          id: 'mastercard',
          name: 'Mastercard',
          description: 'Capital One ••••7877',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ListWithRadioOnRight {...args} />;

export const Default = Template.bind({});

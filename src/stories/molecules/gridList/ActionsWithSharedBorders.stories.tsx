import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ActionsWithSharedBorders,
  Props,
} from '../../../components/molecules/gridList/ActionsWithSharedBorders';

const meta: Meta = {
  title: 'Grid List/Actions with shared borders',
  component: ActionsWithSharedBorders,
  argTypes: {
    actions: {
      defaultValue: [
        {
          title: 'Request time off',
          href: '#',
          //   icon: ClockIcon,
          iconForeground: 'text-teal-700',
          iconBackground: 'bg-teal-50',
        },
        {
          title: 'Benefits',
          href: '#',
          //   icon: CheckBadgeIcon,
          iconForeground: 'text-purple-700',
          iconBackground: 'bg-purple-50',
        },
        {
          title: 'Schedule a one-on-one',
          href: '#',
          //   icon: UsersIcon,
          iconForeground: 'text-sky-700',
          iconBackground: 'bg-sky-50',
        },
        {
          title: 'Payroll',
          href: '#',
          //   icon: BanknotesIcon,
          iconForeground: 'text-yellow-700',
          iconBackground: 'bg-yellow-50',
        },
        {
          title: 'Submit an expense',
          href: '#',
          //   icon: ReceiptRefundIcon,
          iconForeground: 'text-rose-700',
          iconBackground: 'bg-rose-50',
        },
        {
          title: 'Training',
          href: '#',
          //   icon: AcademicCapIcon,
          iconForeground: 'text-indigo-700',
          iconBackground: 'bg-indigo-50',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ActionsWithSharedBorders {...args} />;

export const Default = Template.bind({});

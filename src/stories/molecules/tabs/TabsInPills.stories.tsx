import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TabsInPills, Props } from '../../../components/molecules/tabs/TabsInPills';

const meta: Meta = {
  title: 'Tabs/Tabs in pills',
  component: TabsInPills,
  argTypes: {
    tabs: {
      defaultValue: [
        { name: 'My Account', href: '#', current: false },
        { name: 'Company', href: '#', current: false },
        { name: 'Team Members', href: '#', current: true },
        { name: 'Billing', href: '#', current: false },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <TabsInPills {...args} />;

export const Default = Template.bind({});

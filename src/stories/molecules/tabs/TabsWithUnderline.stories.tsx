import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TabsWithUnderline, Props } from '../../../components/molecules/tabs/TabsWithUnderline';

const meta: Meta = {
  title: 'Tabs/Tabs with underline',
  component: TabsWithUnderline,
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

const Template: Story<Props> = (args) => <TabsWithUnderline {...args} />;

export const Default = Template.bind({});

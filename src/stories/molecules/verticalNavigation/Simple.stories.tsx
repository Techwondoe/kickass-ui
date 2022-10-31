import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  InboxIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { Simple, Props } from '../../../components/molecules/verticalNavigation/Simple';

const meta: Meta = {
  title: 'Verticle navigation/Simple',
  component: Simple,
  argTypes: {
    navigation: {
      defaultValue: [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
        { name: 'Documents', href: '#', current: false },
        { name: 'Reports', href: '#', current: false },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
export const WithIcons = Template.bind({});
WithIcons.args = {
  navigation: [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ],
};

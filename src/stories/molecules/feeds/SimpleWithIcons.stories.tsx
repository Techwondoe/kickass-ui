import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UserIcon, CheckIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';
import { SimpleWithIcons, Props } from '../../../components/molecules/feeds/SimpleWithIcons';

const meta: Meta = {
  title: 'Feeds/Simple with icons',
  component: SimpleWithIcons,
};

export default meta;

const Template: Story<Props> = (args) => <SimpleWithIcons {...args} />;

export const Default = Template.bind({});
Default.args = {
  timeline: [
    {
      content: 'Applied to',
      date: 'Sep 20',
      datetime: '2020-09-20',
      href: '#',
      icon: UserIcon,
      iconBackground: 'bg-gray-400',
      id: 1,
      target: 'Front End Developer',
    },
    {
      content: 'Advanced to phone screening by',
      date: 'Sep 22',
      datetime: '2020-09-22',
      href: '#',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
      id: 2,
      target: 'Bethany Blake',
    },
    {
      content: 'Completed phone screening with',
      date: 'Sep 28',
      datetime: '2020-09-28',
      href: '#',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      id: 3,
      target: 'Martha Gardner',
    },
    {
      content: 'Advanced to interview by',
      date: 'Sep 30',
      datetime: '2020-09-30',
      href: '#',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
      id: 4,
      target: 'Bethany Blake',
    },
    {
      content: 'Completed interview with',
      date: 'Oct 4',
      datetime: '2020-10-04',
      href: '#',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
      id: 5,
      target: 'Katherine Snyder',
    },
  ],
};

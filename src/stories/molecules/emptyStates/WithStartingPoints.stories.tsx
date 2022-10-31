import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline';
import {
  WithStartingPoints,
  Props,
} from '../../../components/molecules/emptyStates/WithStartingPoints';

const meta: Meta = {
  title: 'Empty states/With starting points',
  component: WithStartingPoints,
  argTypes: {
    title: {
      defaultValue: 'Projects',
    },
    description: {
      defaultValue:
        'You haven’t created a project yet. Get started by selecting a template or start from an empty project.',
    },
    items: {
      defaultValue: [
        {
          title: 'Create a List',
          description: 'Another to-do system you’ll try but eventually give up on.',
          icon: Bars4Icon,
          background: 'bg-pink-500',
        },
        {
          title: 'Create a Calendar',
          description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
          icon: CalendarIcon,
          background: 'bg-yellow-500',
        },
        {
          title: 'Create a Gallery',
          description: 'Great for mood boards and inspiration.',
          icon: PhotoIcon,
          background: 'bg-green-500',
        },
        {
          title: 'Create a Board',
          description: 'Track tasks in different stages of your project.',
          icon: ViewColumnsIcon,
          background: 'bg-blue-500',
        },
        {
          title: 'Create a Spreadsheet',
          description: 'Lots of numbers and things — good for nerds.',
          icon: TableCellsIcon,
          background: 'bg-indigo-500',
        },
        {
          title: 'Create a Timeline',
          description: 'Get a birds-eye-view of your procrastination.',
          icon: ClockIcon,
          background: 'bg-purple-500',
        },
      ],
    },
    externalLink: {
      defaultValue: {
        label: 'Or start from an empty project',
        href: 'manikangkandas.vercel.app',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithStartingPoints {...args} />;

export const Default = Template.bind({});

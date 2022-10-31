import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CalendarIcon, CommandLineIcon, MegaphoneIcon } from '@heroicons/react/24/outline';
import { WithTemplates, Props } from '../../../components/molecules/emptyStates/WithTemplates';

const meta: Meta = {
  argTypes: {
    description: {
      defaultValue: 'Get started by selecting a template or start from an empty project.',
    },
    externalLink: {
      defaultValue: {
        href: 'manikangkandas.vercel.app',
        label: 'Or start from an empty project',
      },
    },
    items: {
      defaultValue: [
        {
          description: 'I think the kids call these memes these days.',
          href: '#',
          icon: MegaphoneIcon,
          iconColor: 'bg-pink-500',
          name: 'Marketing Campaign',
        },
        {
          description: 'Something really expensive that will ultimately get cancelled.',
          href: '#',
          icon: CommandLineIcon,
          iconColor: 'bg-purple-500',
          name: 'Engineering Project',
        },
        {
          description: 'Like a conference all about you that no one will care about.',
          href: '#',
          icon: CalendarIcon,
          iconColor: 'bg-yellow-500',
          name: 'Event',
        },
      ],
    },
    title: {
      defaultValue: 'Create your first project',
    },
  },
  component: WithTemplates,
  title: 'Empty states/With templates',
};

export default meta;

const Template: Story<Props> = (args) => <WithTemplates {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleCards, Props } from '../../../components/molecules/gridList/SimpleCards';

const meta: Meta = {
  title: 'Grid List/Simple cards',
  component: SimpleCards,
};

export default meta;

const Template: Story<Props> = (args) => <SimpleCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      bgColor: 'bg-pink-600',
      href: '#',
      initials: 'GA',
      members: 16,
      name: 'Graph API',
    },
    {
      bgColor: 'bg-purple-600',
      href: '#',
      initials: 'CD',
      members: 12,
      name: 'Component Design',
    },
    {
      bgColor: 'bg-yellow-500',
      href: '#',
      initials: 'T',
      members: 16,
      name: 'Templates',
    },
    {
      bgColor: 'bg-green-500',
      href: '#',
      initials: 'RC',
      members: 8,
      name: 'React Components',
    },
  ],
};

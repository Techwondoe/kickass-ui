import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedWithAvatars, Props } from '../../../components/molecules/feeds/StackedWithAvatars';

const meta: Meta = {
  title: 'Feeds/Stacked with avatars',
  component: StackedWithAvatars,
};

export default meta;

const Template: Story<Props> = (args) => <StackedWithAvatars {...args} />;

export const Default = Template.bind({});
Default.args = {
  activityItems: [
    {
      commit: 'master',
      environment: 'Production',
      id: 1,
      person: {
        imageUrl:
          'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
        name: 'Bethany Blake',
      },
      project: 'Front End Developer',
      time: 'Sep 20',
    },
    {
      commit: 'master',
      environment: 'Production',
      id: 2,
      person: {
        imageUrl:
          'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
        name: 'Martha Gardner',
      },
      project: 'Front End Developer',
      time: 'Sep 22',
    },
  ],
};

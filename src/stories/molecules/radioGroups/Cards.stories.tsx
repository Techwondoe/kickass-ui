import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Cards, Props } from '../../../components/molecules/radioGroups/Cards';

const meta: Meta = {
  title: 'Radio Groups/Cards',
  component: Cards,
  argTypes: {
    title: {
      defaultValue: 'Select a mailing list',
    },

    mailingLists: {
      defaultValue: [
        {
          id: 1,
          title: 'Newsletter',
          description: 'Last message sent an hour ago',
          users: '621 users',
        },
        {
          id: 2,
          title: 'Existing Customers',
          description: 'Last message sent 2 weeks ago',
          users: '1200 users',
        },
        {
          id: 3,
          title: 'Trial Users',
          description: 'Last message sent 4 days ago',
          users: '2740 users',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const Default = Template.bind({});

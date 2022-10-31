import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ListWithDescriptionsInPanel,
  Props,
} from '../../../components/molecules/radioGroups/ListWithDescriptionsInPanel';

const meta: Meta = {
  title: 'Radio Groups/List with descriptions in panel',
  component: ListWithDescriptionsInPanel,
  argTypes: {
    label: {
      defaultValue: 'Privacy setting',
    },
    settings: {
      defaultValue: [
        {
          name: 'Public access',
          description: 'This project would be available to anyone who has the link',
        },
        {
          name: 'Private to Project Members',
          description: 'Only members of this project would be able to access',
        },
        {
          name: 'Private to you',
          description: 'You are the only one able to access this project',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ListWithDescriptionsInPanel {...args} />;

export const Default = Template.bind({});

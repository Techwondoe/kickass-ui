import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  CardWithAvatarAndStats,
  Props,
} from '../../../components/molecules/pageHeadings/CardWithAvatarAndStats';

const meta: Meta = {
  title: 'Page headings/Card with avatar and stats',
  component: CardWithAvatarAndStats,
  argTypes: {
    user: {
      defaultValue: {
        name: 'Rebecca Nicholas',
        role: 'Product Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    stats: {
      defaultValue: [
        { label: 'Vacation days left', value: 12 },
        { label: 'Sick days left', value: 4 },
        { label: 'Personal days left', value: 2 },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <CardWithAvatarAndStats {...args} />;

export const Default = Template.bind({});

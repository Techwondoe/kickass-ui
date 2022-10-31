import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  HorizontalLinkCards,
  Props,
} from '../../../components/molecules/gridList/HorizontalLinkCards';

const meta: Meta = {
  title: 'Grid List/Horizontal link cards',
  component: HorizontalLinkCards,
};

export default meta;

const Template: Story<Props> = (args) => <HorizontalLinkCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  people: [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
    },
  ],
};

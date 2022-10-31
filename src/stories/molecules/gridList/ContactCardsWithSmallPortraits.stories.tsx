import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ContactCardsWithSmallPortraits,
  Props,
} from '../../../components/molecules/gridList/ContactCardsWithSmallPortraits';

const meta: Meta = {
  title: 'Grid List/Contact cards with small portraits',
  component: ContactCardsWithSmallPortraits,
};

export default meta;

const Template: Story<Props> = (args) => <ContactCardsWithSmallPortraits {...args} />;

export const Default = Template.bind({});
Default.args = {
  people: [
    {
      email: 'janecooper@example.com',
      imageUrl: 'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
      name: 'Jane Cooper',
      role: 'Admin',
      telephone: '+1-202-555-0170',
      title: 'Regional Paradigm Technician',
    },
    {
      email: 'janecooper@example.com',
      imageUrl: 'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
      name: 'Manikangkan Das',
      role: 'Admin',
      telephone: '+1-202-555-0170',
      title: 'Full stack dev & UI/UX design',
    },
  ],
};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Basic, Props } from '../../../components/molecules/mediaObjects/Basic';

const meta: Meta = {
  title: 'Media Objects/Basic',
  component: Basic,
  argTypes: {
    imgSrc: {
      defaultValue:
        'https://avatars.dicebear.com/api/micah/${Math.random()}.png?background=%23AED7FF',
    },
    heading: {
      defaultValue: 'Lorem ipsum',
    },
    body: {
      defaultValue:
        'Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Basic {...args} />;

export const Default = Template.bind({});

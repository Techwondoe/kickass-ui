import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ColorPicker, Props } from '../../../components/molecules/radioGroups/ColorPicker';

const meta: Meta = {
  title: 'Radio Groups/Color picker',
  component: ColorPicker,
  argTypes: {
    label: {
      defaultValue: 'Choose a label color',
    },

    colors: {
      defaultValue: [
        {
          name: 'Pink',
          bgColor: 'bg-pink-500',
          selectedColor: 'ring-pink-500',
        },
        {
          name: 'Purple',
          bgColor: 'bg-purple-500',
          selectedColor: 'ring-purple-500',
        },
        {
          name: 'Blue',
          bgColor: 'bg-blue-500',
          selectedColor: 'ring-blue-500',
        },
        {
          name: 'Green',
          bgColor: 'bg-green-500',
          selectedColor: 'ring-green-500',
        },
        {
          name: 'Yellow',
          bgColor: 'bg-yellow-500',
          selectedColor: 'ring-yellow-500',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});

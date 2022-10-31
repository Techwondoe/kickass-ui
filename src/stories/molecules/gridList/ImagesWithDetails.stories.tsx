import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ImagesWithDetails, Props } from '../../../components/molecules/gridList/ImagesWithDetails';

const meta: Meta = {
  title: 'Grid List/Images with details',
  component: ImagesWithDetails,
  argTypes: {
    files: {
      defaultValue: [
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
          title: 'IMG_4986.HEIC',
          size: '3.1 MB',
          source:
            'https://images.unsplash.com/photo-1663675358208-84c3a2a7a925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ImagesWithDetails {...args} />;

export const Default = Template.bind({});

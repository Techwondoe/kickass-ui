import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, SimpleProps } from '../../../components/molecules/accordions/Simple';

const meta: Meta = {
  title: 'Accordions/Simple',
  component: Simple,
};

export default meta;

const Template: Story<SimpleProps> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
Default.args = {
  accordoinData: [
    {
      title: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ],
};

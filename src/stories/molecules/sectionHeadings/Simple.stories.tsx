import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Simple, Props } from '../../../components/molecules/sectionHeadings/Simple';

const meta: Meta = {
  title: 'Section headings/Simple',
  component: Simple,
  argTypes: {
    title: {
      defaultValue: 'Job Postings',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});

export const WithDescription = Template.bind({});
WithDescription.args = {
  description:
    'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  actions: [
    {
      label: 'Share',
    },
    {
      label: 'Create',
      active: true,
    },
  ],
};

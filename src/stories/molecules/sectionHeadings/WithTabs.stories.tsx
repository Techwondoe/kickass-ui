import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WithTabs, Props } from '../../../components/molecules/sectionHeadings/WithTabs';

const meta: Meta = {
  title: 'Section headings/With tabs',
  component: WithTabs,
  argTypes: {
    tabs: {
      defaultValue: [
        { name: 'Applied', href: '#', current: false },
        { name: 'Phone Screening', href: '#', current: false },
        { name: 'Interview', href: '#', current: true },
        { name: 'Offer', href: '#', current: false },
        { name: 'Hired', href: '#', current: false },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithTabs {...args} />;

export const Default = Template.bind({});

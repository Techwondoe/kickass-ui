import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WithActions, Props } from '../../../components/molecules/pageHeadings/WithActions';

const meta: Meta = {
  title: 'Page headings/With actions',
  component: WithActions,
  argTypes: {
    headingText: {
      defaultValue: 'Back End Developer',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithActions {...args} />;

export const Default = Template.bind({});

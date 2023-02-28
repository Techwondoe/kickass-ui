import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Typography } from '../components/atoms/Typography';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} children="test" />
);

export const Primary = Template.bind({});
Primary.args = {};

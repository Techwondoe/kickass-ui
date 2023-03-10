import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Divider } from '../components/atoms/Divider/divider';

const Story: ComponentMeta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
};
export default Story;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

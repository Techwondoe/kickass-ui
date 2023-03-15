import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ColorPicker } from '../components/atoms/ColorPicker/ColorPicker';

const Story: ComponentMeta<typeof ColorPicker> = {
  component: ColorPicker,
  title: 'Forms/ColorPicker',
};
export default Story;

const Template: ComponentStory<typeof ColorPicker> = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

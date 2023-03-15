import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Radio, RadioProps } from '../components/atoms/Radio/Radio';

const Story: ComponentMeta<typeof Radio> = {
  component: Radio,
  title: 'Forms/Radio',
};
export default Story;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...(args as RadioProps)} />;

export const Regular = Template.bind({});
Regular.args = {};

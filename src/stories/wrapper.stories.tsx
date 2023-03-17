import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Wrapper } from '../components/atoms/wrapper/wrapper';

const Story: ComponentMeta<typeof Wrapper> = {
  component: Wrapper,
  title: 'Wrapper',
};
export default Story;

const Template: ComponentStory<typeof Wrapper> = (args) => <Wrapper {...args} />;

const Primary = Template.bind({});
Primary.args = {};

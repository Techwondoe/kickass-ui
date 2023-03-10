import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Toggle } from '../components/atoms/toggle/toggle';

const Story: ComponentMeta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
};
export default Story;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...(args as any)} />;

export const Regular = Template.bind({});
Regular.args = {};

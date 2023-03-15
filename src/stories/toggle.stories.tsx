import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Toggle } from '../components/atoms/toggle/toggle';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';

const Story: ComponentMeta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
};
export default Story;

const Template: ComponentStory<typeof Toggle> = (args) => {
  return <ComponentWithColors componentName={ComponentName.TOGGLE} componentProps={args} />;
};
export const Regular = Template.bind({});
Regular.args = {};

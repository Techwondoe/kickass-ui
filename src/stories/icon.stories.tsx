import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Icon } from '../components/atoms/icon/icon';

const Story: ComponentMeta<typeof Icon> = {
  component: Icon,
  title: 'Icon',
};
export default Story;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  name: 'activity',
  color: 'gray-600',
};

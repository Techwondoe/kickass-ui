import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ProgressBar } from '../components/atoms/ProgressBar/progress-bar';

const Story: ComponentMeta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ProgressBar',
};
export default Story;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Regular = Template.bind({});

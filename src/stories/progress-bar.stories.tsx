import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ProgressBar } from '../components/atoms/ProgressBar/progress-bar';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';

const Story: ComponentMeta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ProgressBar',
};
export default Story;

const Template: ComponentStory<typeof ProgressBar> = (args) => {
  return <ComponentWithColors componentName={ComponentName.PROGRESSBAR} componentProps={args} />;
};

export const Regular = Template.bind({});

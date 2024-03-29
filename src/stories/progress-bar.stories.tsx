import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ProgressBar } from '../components/atoms/ProgressBar/ProgressBar';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ProgressBar',
};
export default Story;

const Template: ComponentStory<typeof ProgressBar> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      primary: {
        ...(base.color.primary as Record<ColorShade, string>),
        // '600': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.PROGRESSBAR}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});

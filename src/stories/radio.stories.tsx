import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Radio } from '../components/atoms/Radio/Radio';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof Radio> = {
  component: Radio,
  title: 'Forms/Radio',
};
export default Story;

const Template: ComponentStory<typeof Radio> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      gray: {
        ...(base.color.gray as Record<ColorShade, string>),
        // '300': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.RADIO}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};


export const Regular = Template.bind({});
Regular.args = {};

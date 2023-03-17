import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ColorPicker } from '../components/atoms/ColorPicker/ColorPicker';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof ColorPicker> = {
  component: ColorPicker,
  title: 'Forms/ColorPicker',
};
export default Story;

const Template: ComponentStory<typeof ColorPicker> = (args) => {
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
      componentName={ComponentName.COLORPICKER}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

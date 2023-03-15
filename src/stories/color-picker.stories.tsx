import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ColorPicker } from '../components/atoms/ColorPicker/ColorPicker';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof ColorPicker> = {
  component: ColorPicker,
  title: 'Forms/ColorPicker',
};
export default Story;

const Template: ComponentStory<typeof ColorPicker> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '600': 'red',
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

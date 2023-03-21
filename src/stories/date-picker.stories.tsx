import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { DatePicker } from '../components/atoms/DatePicker';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Forms/Date Picker',
};
export default Story;

const Template: ComponentStory<typeof DatePicker> = (args) => {
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
      componentName={ComponentName.DATEPICKER}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const RangePicker = Template.bind({});
RangePicker.args = {
  hidePresetRanges: false,
  type: 'range',
};

export const SinglePicker = Template.bind({});
SinglePicker.args = {
  type: 'single',
};

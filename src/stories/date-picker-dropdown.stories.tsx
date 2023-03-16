import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { DatePickerDropdown } from '../components/atoms/date-picker-dropdown/date-picker-dropdown';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof DatePickerDropdown> = {
  component: DatePickerDropdown,
  title: 'Forms/Date Picker Dropdown',
};
export default Story;

const Template: ComponentStory<typeof DatePickerDropdown> = (args) => {
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
      componentName={ComponentName.DATEPICKERDROPDOWN}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

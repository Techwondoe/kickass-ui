import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { DatePickerDropdown } from '../components/atoms/date-picker-dropdown/date-picker-dropdown';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof DatePickerDropdown> = {
  component: DatePickerDropdown,
  title: 'Forms/Date Picker Dropdown',
};
export default Story;

const Template: ComponentStory<typeof DatePickerDropdown> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '600': 'red',
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

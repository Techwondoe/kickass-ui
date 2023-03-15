import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Calendar } from '../components/atoms/calendar/calendar';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof Calendar> = {
  component: Calendar,
  title: 'Forms/Calendar',
};
export default Story;

const Template: ComponentStory<typeof Calendar> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    gray: {
      ...base.gray,
      // '700': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.CALENDAR}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};
export const Primary = Template.bind({});
Primary.args = {
  onChange: undefined,
};

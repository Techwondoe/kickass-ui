import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Calendar } from '../components/atoms/calendar/calendar';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof Calendar> = {
  component: Calendar,
  title: 'Forms/Calendar',
};
export default Story;

const Template: ComponentStory<typeof Calendar> = (args) => {
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

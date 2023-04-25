import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { AmountInputField } from '../components/atoms/AmountInput/AmountInput';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof AmountInputField> = {
  component: AmountInputField,
  title: 'Forms/Amount Input Field',
};
export default Story;

const Template: ComponentStory<typeof AmountInputField> = (args) => {
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
      componentName={ComponentName.AMOUNTINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Sale amount',
  hint: 'This is a hint text to help user.',
};

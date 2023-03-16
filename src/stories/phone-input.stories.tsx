import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PhoneInputField } from '../components/atoms/PhoneInput/phone-input';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof PhoneInputField> = {
  component: PhoneInputField,
  title: 'Forms/Phone Input Field',
};
export default Story;

const Template: ComponentStory<typeof PhoneInputField> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      gray: {
        ...(base.color.gray as Record<ColorShade, string>),
        // '500': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.PHONEINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};


export const Regular = Template.bind({});
Regular.args = {
  label: 'Phone',
  hint: 'This is a hint text to help user.',
};

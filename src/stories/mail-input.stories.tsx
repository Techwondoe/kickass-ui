import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MailInputField } from '../components/atoms/MailInput/MailInput';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof MailInputField> = {
  component: MailInputField,
  title: 'Forms/Mail Input Field',
};
export default Story;

const Template: ComponentStory<typeof MailInputField> = (args) => {
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
      componentName={ComponentName.MAILINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Name',
  hint: 'This is a hint text to help user.',
};

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TextInputField } from '../components/atoms/TextInput/text-input';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';


const Story: ComponentMeta<typeof TextInputField> = {
  component: TextInputField,
  title: 'Forms/Text Input Field',
};
export default Story;

const Template: ComponentStory<typeof TextInputField> = (args) => {
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
      componentName={ComponentName.TEXTINPUT}
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

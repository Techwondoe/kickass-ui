import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CopyInputField } from '../components/atoms/CopyInput/CopyInput';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';

const Story: ComponentMeta<typeof CopyInputField> = {
  component: CopyInputField,
  title: 'Forms/Copy Input Field',
};
export default Story;

const Template: ComponentStory<typeof CopyInputField> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    gray: {
      ...base.gray,
      // '700': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.COPYINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Website',
  hint: 'This is a hint text to help user.',
};

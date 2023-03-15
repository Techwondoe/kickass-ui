import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../components/atoms/checkbox/checkbox';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Forms/Checkbox',
};
export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.CHECKBOX}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {};

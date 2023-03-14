import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { Typography } from '../components/atoms/Typography';
import { extendTheme, base } from '~/themes';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
  argTypes: {
    color: { defaultValue: 'primary-600' },
  },
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.TYPOGRAPHY}
      componentProps={{ ...args, children: 'test' }}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

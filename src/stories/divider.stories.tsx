import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Divider } from '../components/atoms/Divider/divider';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
};
export default Story;

const Template: ComponentStory<typeof Divider> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      //   '200': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.DIVIDER}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

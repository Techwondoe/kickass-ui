import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ButtonWrapper } from '../components/atoms/ButtonWrapper/button-wrapper';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof ButtonWrapper> = {
  component: ButtonWrapper,
  title: 'Buttons/Button Wrapper',
};
export default Story;

const Template: ComponentStory<typeof ButtonWrapper> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      primary: {
        ...(base.color.primary as Record<ColorShade, string>),
        '600': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.BUTTONWRAPPER}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

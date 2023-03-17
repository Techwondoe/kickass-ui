import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
import { Button } from '../components/atoms/Button';
import React from 'react';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Buttons/Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => {
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
      componentName={ComponentName.BUTTON}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button CTA',
  className: 'btn btn-primary-600',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  icon: 'placeholder',
  className: 'btn-xl btn-error-600',
  label: 'Button CTA',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  className: 'btn-md btn-success-600',
  endIcon: 'placeholder',
  label: 'Button CTA',
};

export const Online = Template.bind({});
Online.args = {
  className: 'btn-sm btn-primary-600',
  label: 'Button CTA',
  online: true,
};

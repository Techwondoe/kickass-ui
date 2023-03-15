import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Badge } from '../components/atoms/Badge/Badge';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
};
export default Story;

const Template: ComponentStory<typeof Badge> = (args) => {
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
      componentName={ComponentName.BADGE}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  color: 'success',
  label: 'Label',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  color: 'success',
  label: 'Label',
  endIcon: 'arrow-right',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  color: 'success',
  label: 'Label',
  icon: 'x-close',
};

export const Avatar = Template.bind({});
Avatar.args = {
  color: 'success',
  label: 'Label',
  avatar: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
};

export const Online = Template.bind({});
Online.args = {
  color: 'success',
  label: 'Label',
  status: 'online',
};
export const ClassNameStyle = Template.bind({});
ClassNameStyle.args = {
  className: 'bdge-blue bdge-lg',
  label: 'Label',
  endIcon: 'arrow-right',
};

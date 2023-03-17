import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IconBadge } from '../components/atoms/IconBadge/IconBadge';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof IconBadge> = {
  component: IconBadge,
  title: 'IconBadge',
};
export default Story;
//ad
const Template: ComponentStory<typeof IconBadge> = (args) => {
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
      componentName={ComponentName.ICONBADGE}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  color: 'error',
  icon: 'x-close',
};

export const ClassNameStyle = Template.bind({});
ClassNameStyle.args = {
  className: 'ibdge-blue',
  icon: 'x-close',
};

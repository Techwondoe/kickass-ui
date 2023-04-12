import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IconButton } from '../components/atoms/iconButton/IconButton';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof IconButton> = {
  component: IconButton,
  title: 'Buttons/IconButton',
};
export default Story;

const Template: ComponentStory<typeof IconButton> = (args) => {
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
      componentName={ComponentName.ICONBUTTON}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  color: 'primary',
  icon: 'plus',
  size: 'md',
};

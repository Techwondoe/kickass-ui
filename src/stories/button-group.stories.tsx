import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup } from '../components/atoms/ButtonGroup/button-group';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Buttons/ButtonGroup',
};
export default Story;

const Template: ComponentStory<typeof ButtonGroup> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      primary: {
        ...(base.color.primary as Record<ColorShade, string>),
        // '700': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.BUTTONGROUP}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

const items = [
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
  {
    label: 'Messages',
  },
];

export const Horizontal = Template.bind({});
Horizontal.args = {
  items,
};

export const Vertical = Template.bind({});
Vertical.args = {
  items,
  orientation: 'vertical',
};

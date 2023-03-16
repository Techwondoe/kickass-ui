import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IconButtonGroup } from '../components/atoms/iconButtonGroup/icon-button-group';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof IconButtonGroup> = {
  component: IconButtonGroup,
  title: 'Buttons/IconButtonGroup',
};
export default Story;

const Template: ComponentStory<typeof IconButtonGroup> = (args) => {
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
      componentName={ComponentName.ICONBUTTONGROUP}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};


export const Horizontal = Template.bind({});

Horizontal.args = {
  items: [
    {
      icon: 'arrow-left',
    },
    {
      icon: 'plus',
    },
    {
      icon: 'arrow-right',
    },
  ],
};

export const Vertical = Template.bind({});

Vertical.args = {
  items: [
    {
      icon: 'arrow-up',
    },
    {
      icon: 'plus',
    },
    {
      icon: 'arrow-down',
    },
  ],
  orientation: 'vertical',
};

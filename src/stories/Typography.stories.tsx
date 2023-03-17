import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { Typography } from '../components/atoms/Typography';
import { extendTheme, ColorShade } from '~/themes';
import React from 'react';
import { base } from '~/themes/constants';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
  argTypes: {},
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    font: {
      ...base.font,
      display: {
        ...base.font.display,
        sm: {
          size: '10px',
          lineHeight: '10px',
          letterSpacing: '10px',
        },
      },
    },
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
      componentName={ComponentName.TYPOGRAPHY}
      componentProps={{ ...args, children: 'test' }}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

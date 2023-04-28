import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
import React from 'react';
import { Card } from '../components/atoms/Card/Card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => {
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
      componentName={ComponentName.CARD}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Total Reviews',
  value: 35,
  status: [
    {
      label: '26 complete',
      isComplete: true,
    },
    {
      label: '9 pending',
      isComplete: false,
    },
  ],
  directionMetric: {
    description: 'Compared to last month',
    data: {
      value: 7.5,
      limit: 5,
    },
  },
};

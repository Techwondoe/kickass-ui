import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import DirectionMetric from '../components/atoms/DirectionMetric/DirectionMetric';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';

const Story: ComponentMeta<typeof DirectionMetric> = {
  component: DirectionMetric,
  title: 'DirectionMetric',
};
export default Story;

const Template: ComponentStory<typeof DirectionMetric> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '700': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.DIRECTIONMETRIC}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  displayValue: 'Market',
  value: 24,
  limit: 24,
};

export const Low = Template.bind({});
Low.args = {
  displayValue: 'Market',
  value: 24,
  limit: 36,
};

export const High = Template.bind({});
High.args = {
  displayValue: 'Market',
  value: 36,
  limit: 24,
};


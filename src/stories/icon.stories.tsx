import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
import React from 'react';
import { Icon } from '../components/atoms/icon/icon';

const Story: ComponentMeta<typeof Icon> = {
  component: Icon,
  title: 'Icon',
};
export default Story;

const Template: ComponentStory<typeof Icon> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.ICON}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  name: 'activity',
  color: 'gray-600',
};

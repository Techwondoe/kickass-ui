import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
import React from 'react';
import { EmptySection } from '../components/atoms/EmptySection/empty-section';

const Story: ComponentMeta<typeof EmptySection> = {
  component: EmptySection,
  title: 'EmptySection',
};
export default Story;

const Template: ComponentStory<typeof EmptySection> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
      // '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.EMPTYSECTION}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};


export const Regular = Template.bind({});
Regular.args = {};

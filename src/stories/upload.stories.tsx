import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Upload } from '../components/atoms/upload/upload';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof Upload> = {
  component: Upload,
  title: 'Forms/Upload',
};
export default Story;

const Template: ComponentStory<typeof Upload> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      gray: {
        ...(base.color.gray as Record<ColorShade, string>),
        // '500': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.UPLOAD}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {};

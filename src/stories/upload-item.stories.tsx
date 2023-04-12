import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { UploadItem } from '../components/atoms/uploadItem/UploadItem';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof UploadItem> = {
  component: UploadItem,
  title: 'Forms/Upload Item',
};
export default Story;

const Template: ComponentStory<typeof UploadItem> = (args) => {
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
      componentName={ComponentName.UPLOADITEM}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Design1.psd',
  size: '5.2 mb',
  progress: 20,
};

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SiteInputField } from '../components/atoms/SelectInput/site-input';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof SiteInputField> = {
  component: SiteInputField,
  title: 'Forms/Site Input Field',
};
export default Story;

const Template: ComponentStory<typeof SiteInputField> = (args) => {
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
      componentName={ComponentName.SITEINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Website',
  hint: 'This is a hint text to help user.',
};

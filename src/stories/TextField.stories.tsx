import { TextField } from '~/components/atoms';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof TextField> = {
  component: TextField,
  title: 'Forms/Text field',
  argTypes: {
    label: {
      defaultValue: 'Label',
    },
    placeholder: {
      defaultValue: 'Placeholder',
    },
    helperText: {
      defaultValue: 'Helper text',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof TextField> = (args) => {
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
      componentName={ComponentName.TEXTFIELD}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  helperText: 'Helper text',
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
};

export const Select = Template.bind({});
Select.args = {
  select: true,
  options: ['Option 1', 'Option 2', 'Option 3'],
};

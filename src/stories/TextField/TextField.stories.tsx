import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextFieldProps } from '~/components/atoms';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';

const TextFieldContainer = (props: TextFieldProps) => {
  const customTheme = extendTheme(base, {
    primary: 'blue',
    secondary: 'green',
    contrast: {
      ...base.contrast,
      primary: 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.TEXTFIELD}
      componentProps={props}
      customTheme={customTheme}
    />
  );
};

export default {
  title: 'Forms/Text field',
  component: TextFieldContainer,
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
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextFieldContainer {...args} />;
export const Default = Template.bind({});
Default.args = {
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

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  className: 'px-12 py-6',
};

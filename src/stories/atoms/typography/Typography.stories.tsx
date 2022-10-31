import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps } from '../../../components/atoms/Typography';

const meta: Meta = {
  title: 'Typography/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      },
    },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
  variant: 'h1',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  children: 'Custom Typography Comps',
  variant: 'h2',
  className: 'font-bold italic',
};

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IconButtonGroup } from '../components/atoms/iconButtonGroup/icon-button-group';

const Story: ComponentMeta<typeof IconButtonGroup> = {
  component: IconButtonGroup,
  title: 'Buttons/IconButtonGroup',
};
export default Story;

const Template: ComponentStory<typeof IconButtonGroup> = (args) => <IconButtonGroup {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  items: [
    {
      icon: 'arrow-left',
    },
    {
      icon: 'plus',
    },
    {
      icon: 'arrow-right',
    },
  ],
};

export const Vertical = Template.bind({});

Vertical.args = {
  items: [
    {
      icon: 'arrow-up',
    },
    {
      icon: 'plus',
    },
    {
      icon: 'arrow-down',
    },
  ],
  orientation: 'vertical',
};

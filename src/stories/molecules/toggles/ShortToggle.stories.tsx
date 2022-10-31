import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ShortToggle } from '../../../components/molecules/toggles/ShortToggle';

const meta: Meta = {
  title: 'Toggles/Short toggle',
  component: ShortToggle,
};

export default meta;

const Template: Story = (args) => <ShortToggle {...args} />;

export const Default = Template.bind({});

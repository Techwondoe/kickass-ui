import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleWithIcon } from '../../../components/molecules/toggles/ToggleWithIcon';

const meta: Meta = {
  title: 'Toggles/Toggle with icon',
  component: ToggleWithIcon,
};

export default meta;

const Template: Story = (args) => <ToggleWithIcon {...args} />;

export const Default = Template.bind({});

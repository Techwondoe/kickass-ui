import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ButtonWrapper } from '../components/atoms/ButtonWrapper/button-wrapper';

const Story: ComponentMeta<typeof ButtonWrapper> = {
  component: ButtonWrapper,
  title: 'Buttons/Button Wrapper',
};
export default Story;

const Template: ComponentStory<typeof ButtonWrapper> = (args) => <ButtonWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

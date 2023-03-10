import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SiteInputField } from '../components/atoms/SelectInput/site-input';

const Story: ComponentMeta<typeof SiteInputField> = {
  component: SiteInputField,
  title: 'Forms/Site Input Field',
};
export default Story;

const Template: ComponentStory<typeof SiteInputField> = (args) => <SiteInputField {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Website',
  hint: 'This is a hint text to help user.',
};

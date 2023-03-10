import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Tag } from '../components/atoms/Tag/tag';

const Story: ComponentMeta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};
export default Story;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Label',
};

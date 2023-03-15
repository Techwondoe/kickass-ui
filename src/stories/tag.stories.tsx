import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Tag } from '../components/atoms/Tag/tag';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
const Story: ComponentMeta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};
export default Story;

const Template: ComponentStory<typeof Tag> = (args) => {
  return <ComponentWithColors componentName={ComponentName.TAG} componentProps={args} />;
};

export const Regular = Template.bind({});
Regular.args = {
  label: 'Label',
};

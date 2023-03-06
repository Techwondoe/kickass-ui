import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { EmptySection } from '../components/atoms/EmptySection/empty-section';

const Story: ComponentMeta<typeof EmptySection> = {
  component: EmptySection,
  title: 'EmptySection',
};
export default Story;

const Template: ComponentStory<typeof EmptySection> = (args) => <EmptySection {...(args as any)} />;

export const Regular = Template.bind({});
Regular.args = {};

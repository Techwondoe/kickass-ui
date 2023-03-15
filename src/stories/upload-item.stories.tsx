import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { UploadItem, UploadItemsProps } from '../components/atoms/uploadItem/upload-item';

const Story: ComponentMeta<typeof UploadItem> = {
  component: UploadItem,
  title: 'Forms/Upload Item',
};
export default Story;

const Template: ComponentStory<typeof UploadItem> = (args) => (
  <UploadItem {...(args as UploadItemsProps)} />
);

export const Regular = Template.bind({});
Regular.args = {
  label: 'Design1.psd',
  size: '5.2 mb',
  progress: 20,
};

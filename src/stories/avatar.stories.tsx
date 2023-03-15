import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
import React from "react";
import { Avatar } from "../components/atoms/Avatar/Avatar";

const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
    //   '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.AVATAR}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Image = Template.bind({});
Image.args = {
  src: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'placeholder',
};

export const Name = Template.bind({});
Name.args = {
  type: 'name',
  name: 'James Cameron',
};

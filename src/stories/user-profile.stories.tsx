import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { UserProfile } from '../components/atoms/UserProfile/UserProfile';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';
const Story: ComponentMeta<typeof UserProfile> = {
  component: UserProfile,
  title: 'UserProfile',
};
export default Story;

const Template: ComponentStory<typeof UserProfile> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    gray: {
      ...base.gray,
      // '500': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.USERPROFILE}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};
export const Regular = Template.bind({});
Regular.args = {
  name: 'Cian Mcloughlin',
  subTitle: 'cian@usetrinity.com',
  avatar: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
};

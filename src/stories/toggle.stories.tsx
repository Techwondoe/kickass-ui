import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Toggle } from "../components/atoms/toggle/toggle";
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';

const Story: ComponentMeta<typeof Toggle> = {
    component: Toggle,
    title: "Toggle",
};
export default Story;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    primary: {
      ...base.primary,
    //   '600': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.TOGGLE}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};
export const Regular = Template.bind({});
Regular.args = {};

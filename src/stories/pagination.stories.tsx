import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Pagination } from "../components/atoms/Pagination/pagination";
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base } from '~/themes';

const Story: ComponentMeta<typeof Pagination> = {
    component: Pagination,
    title: "Pagination",
};
export default Story;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    gray: {
      ...base.gray,
    //   '700': 'red',
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.PAGINATION}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
    count: 12,
};

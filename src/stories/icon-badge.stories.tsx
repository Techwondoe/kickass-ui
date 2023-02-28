import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { IconBadge } from "../components/atoms/IconBadge/IconBadge";

const Story: ComponentMeta<typeof IconBadge> = {
    component: IconBadge,
    title: "IconBadge",
};
export default Story;
//ad
const Template: ComponentStory<typeof IconBadge> = args => (
    <IconBadge {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    color: "success",
    icon: "x-close",
};

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { IconButton } from "../components/atoms/iconButton/icon-button";

const Story: ComponentMeta<typeof IconButton> = {
    component: IconButton,
    title: "Buttons/IconButton",
};
export default Story;

const Template: ComponentStory<typeof IconButton> = args => (
    <IconButton {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    color: "primary",
    icon: "plus",
    size: "md",
};

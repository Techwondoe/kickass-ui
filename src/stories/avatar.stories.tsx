import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Avatar } from "../components/atoms/Avatar/Avatar";

const Story: ComponentMeta<typeof Avatar> = {
    component: Avatar,
    title: "Avatar",
};
export default Story;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
    src: "https://avatars.githubusercontent.com/u/28987707?s=96&v=4",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    type: "placeholder",
};

export const Name = Template.bind({});
Name.args = {
    type: "name",
    name: "James Cameron",
};

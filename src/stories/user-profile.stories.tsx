import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { UserProfile } from "../components/atoms/UserProfile/user-profile";

const Story: ComponentMeta<typeof UserProfile> = {
    component: UserProfile,
    title: "UserProfile",
};
export default Story;

const Template: ComponentStory<typeof UserProfile> = args => (
    <UserProfile {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {
    name: "Cian Mcloughlin",
    subTitle: "cian@usetrinity.com",
    avatar: "https://avatars.githubusercontent.com/u/28987707?s=96&v=4",
};

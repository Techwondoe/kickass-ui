import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Logo } from "../components/atoms/logo/logo";

const Story: ComponentMeta<typeof Logo> = {
    component: Logo,
    title: "Logo",
};
export default Story;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

const Primary = Template.bind({});
Primary.args = {};

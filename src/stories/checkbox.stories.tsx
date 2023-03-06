import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Checkbox } from "../components/atoms/checkbox/checkbox";

const Story: ComponentMeta<typeof Checkbox> = {
    component: Checkbox,
    title: "Forms/Checkbox",
};
export default Story;

const Template: ComponentStory<typeof Checkbox> = args => (
    <Checkbox {...args} />
);

export const Regular = Template.bind({});
Regular.args = {};

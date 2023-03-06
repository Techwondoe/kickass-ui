import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { CopyInputField } from "../components/atoms/CopyInput/CopyInput";

const Story: ComponentMeta<typeof CopyInputField> = {
    component: CopyInputField,
    title: "Forms/CopyInputField",
};
export default Story;

const Template: ComponentStory<typeof CopyInputField> = args => (
    <CopyInputField {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    label: "Website",
    hint: "This is a hint text to help user.",
};

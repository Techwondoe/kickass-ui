import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TextInputField } from "../components/atoms/TextInput/text-input";

const Story: ComponentMeta<typeof TextInputField> = {
    component: TextInputField,
    title: "Forms/TextInputField",
};
export default Story;

const Template: ComponentStory<typeof TextInputField> = args => (
    <TextInputField {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    label: "Name",
    hint: "This is a hint text to help user.",
};

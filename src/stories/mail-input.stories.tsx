import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { MailInputField } from "../components/atoms/MailInput/mail-input";

const Story: ComponentMeta<typeof MailInputField> = {
    component: MailInputField,
    title: "Forms/Mail Input Field",
};
export default Story;

const Template: ComponentStory<typeof MailInputField> = args => (
    <MailInputField {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    label: "Name",
    hint: "This is a hint text to help user.",
};

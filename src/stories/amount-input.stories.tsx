import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { AmountInputField } from "../components/atoms/AmountInput/amount-input";

const Story: ComponentMeta<typeof AmountInputField> = {
    component: AmountInputField,
    title: "Forms/Amount Input Field",
};
export default Story;

const Template: ComponentStory<typeof AmountInputField> = args => (
    <AmountInputField {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
    label: "Sale amount",
    hint: "This is a hint text to help user.",
};

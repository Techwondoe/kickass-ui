import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { DatePicker } from "../components/atoms/date-picker/date-picker";

const Story: ComponentMeta<typeof DatePicker> = {
    component: DatePicker,
    title: "Forms/Date Picker",
};
export default Story;

const Template: ComponentStory<typeof DatePicker> = args => (
    <DatePicker {...args} />
);

export const RangePicker = Template.bind({});
RangePicker.args = {
    hidePresetRanges: false,
    type: "range",
};

export const SinglePicker = Template.bind({});
SinglePicker.args = {
    type: "single",
};

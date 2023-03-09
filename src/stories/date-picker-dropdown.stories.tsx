import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { DatePickerDropdown } from "../components/atoms/date-picker-dropdown/date-picker-dropdown";

const Story: ComponentMeta<typeof DatePickerDropdown> = {
    component: DatePickerDropdown,
    title: "Forms/Date Picker Dropdown",
};
export default Story;

const Template: ComponentStory<typeof DatePickerDropdown> = args => (
    <DatePickerDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

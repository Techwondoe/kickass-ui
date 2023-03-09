import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Calendar } from "../components/atoms/calendar/calendar";

const Story: ComponentMeta<typeof Calendar> = {
    component: Calendar,
    title: "Forms/Calendar",
};
export default Story;

const Template: ComponentStory<typeof Calendar> = args => (
    <Calendar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onChange: undefined,
};

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Pagination } from "../components/atoms/Pagination/pagination";

const Story: ComponentMeta<typeof Pagination> = {
    component: Pagination,
    title: "Pagination",
};
export default Story;

const Template: ComponentStory<typeof Pagination> = args => (
    <Pagination {...args} onChange={undefined} />
);

export const Regular = Template.bind({});
Regular.args = {
    count: 12,
};

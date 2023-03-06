import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Upload } from "../components/atoms/upload/upload";

const Story: ComponentMeta<typeof Upload> = {
    component: Upload,
    title: "Upload",
};
export default Story;

const Template: ComponentStory<typeof Upload> = args => (
    <Upload {...(args as any)} />
);

export const Regular = Template.bind({});
Regular.args = {};

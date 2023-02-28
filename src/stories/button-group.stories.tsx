import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonGroup } from "../components/atoms/ButtonGroup/button-group";

const Story: ComponentMeta<typeof ButtonGroup> = {
    component: ButtonGroup,
    title: "ButtonGroup",
};
export default Story;

const Template: ComponentStory<typeof ButtonGroup> = args => (
    <ButtonGroup {...args} />
);

const items = [
    {
        label: "Profile",
    },
    {
        label: "Settings",
    },
    {
        label: "Messages",
    },
];

export const Horizontal = Template.bind({});
Horizontal.args = {
    items,
};

export const Vertical = Template.bind({});
Vertical.args = {
    items,
    orientation: "vertical",
};

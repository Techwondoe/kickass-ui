import type { ComponentStory, ComponentMeta } from "@storybook/react";
import {Avatar} from "../components/atoms/Avatar/Avatar";
import {Typography} from "../components/atoms/Typography/Typography";
import { SelectInputField } from "../components/atoms/SelectInput/select-input";
import React from "react";

const Story: ComponentMeta<typeof SelectInputField> = {
    component: SelectInputField,
    title: "Forms/Select Input Field",
};
export default Story;

const Template: ComponentStory<typeof SelectInputField> = args => (
    <SelectInputField {...args} />
);

export const Text = Template.bind({});
Text.args = {
    label: "Name",
    placeholder: "Siva Nagendra Kumar Vepada",
    hint: "This is a sample hint",
    items: [
        {
            id: "pheonix",
            name: "Pheonix",
        },
        {
            id: "cian",
            name: "Cian Mcloughlin",
        },
        {
            id: "lana",
            name: "Lana Steiner",
        },
    ],
    renderItem: ({ id, name }:{ id:string, name:string }) => (
        <div key={id} className="flex items-center gap-2 flex-wrap">
            <Avatar
                src="https://avatars.githubusercontent.com/u/28987707?s=96&v=4"
                size="xs"
            />
            <Typography color="gray-900">{name}</Typography>
            <Typography color="gray-500">{`@${id}`}</Typography>
        </div>
    ),
};

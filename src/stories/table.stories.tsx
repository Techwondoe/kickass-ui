import { faker } from "@faker-js/faker";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import {Button} from "../components/atoms/Button/Button";
import {Typography} from "../components/atoms/Typography/Typography";
import { Table } from "../components/atoms/table/table";
import React from "react";

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: "relationship" | "complicated" | "single";
    createdAt: Date;
    subRows?: Person[];
};

const range = (len: number) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = (): Person => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(40),
        visits: faker.datatype.number(1000),
        progress: faker.datatype.number(100),
        createdAt: faker.datatype.datetime({ max: new Date().getTime() }),
        status: faker.helpers.shuffle<Person["status"]>([
            "relationship",
            "complicated",
            "single",
        ])[0]!,
    };
};

function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!;
        return range(len).map((d): Person => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel();
}

const Story: ComponentMeta<typeof Table> = {
    component: Table,
    title: "Table",
};
export default Story;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

const columns: ColumnDef<Person>[] = [
    {
        header: "Name",
        footer: props => props.column.id,
        columns: [
            {
                id: "firstName",
                accessorKey: "firstName",
                cell: info => info.getValue(),
                footer: props => props.column.id,
                header: () => <span>First Name</span>,
            },
            {
                accessorFn: row => row.lastName,
                id: "lastName",
                cell: info => info.getValue(),
                header: () => <span>Last Name</span>,
                footer: props => props.column.id,
            },
        ],
    },
    {
        header: "Info",
        footer: props => props.column.id,
        columns: [
            {
                accessorKey: "age",
                header: () => "Age",
                footer: props => props.column.id,
            },
            {
                header: "More Info",
                columns: [
                    {
                        accessorKey: "visits",
                        header: () => <span>Visits</span>,
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: "status",
                        header: "Status",
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: "progress",
                        header: "Profile Progress",
                        footer: props => props.column.id,
                    },
                ],
            },
        ],
    },
];

export const Primary = Template.bind({});

Primary.args = {
    columns,
    data: makeData(500),
    enableRowSelection: true,
    enablePagination: true,
};

const people = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        status: "Active",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        status: "Active",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        status: "Active",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

export const Secondary = Template.bind({});

Secondary.args = {
    columns: [
        {
            header: "Name",
            accessorKey: "name",
            cell: ({ getValue }) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={getValue().image}
                            alt=""
                        />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-900">
                            {getValue().name}
                        </div>
                        <div className="text-gray-500">{getValue().email}</div>
                    </div>
                </div>
            ),
        },
        {
            header: "Status",
            accessorKey: "status",
        },
        {
            header: "Role",
            accessorKey: "role",
        },
        {
            header: "Email address",
            accessorKey: "email",
        },
    ] as ColumnDef<Person, any>[],
    data: people.map(
        ({ name, department, email, image, role, status, title }) => ({
            name: { name, email, image },
            status,
            role,
            email,
            department,
            title,
        })
    ),
    header: () => (
        <div className="sm:flex sm:items-center px-6 py-3">
            <div className="sm:flex-auto">
                <Typography size="xl">Users</Typography>
                <Typography size="sm" color="gray-700">
                    A list of all the users in your account including their
                    name, title, email and role.
                </Typography>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <Button label="Add User" />
            </div>
        </div>
    ),
};

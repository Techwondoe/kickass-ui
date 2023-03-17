import { faker } from '@faker-js/faker';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../components/atoms/Button/Button';
import { Typography } from '../components/atoms/Typography/Typography';
import { Table } from '../components/atoms/table/table';
import React from 'react';

export type Person = {
  age: number;
  createdAt: Date;
  firstName: string;
  lastName: string;
  progress: number;
  status: 'relationship' | 'complicated' | 'single';
  subRows?: Person[];
  visits: number;
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
    age: faker.datatype.number(40),
    createdAt: faker.datatype.datetime({
      max: new Date().getTime(),
    }),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    progress: faker.datatype.number(100),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    status: faker.helpers.shuffle<Person['status']>(['relationship', 'complicated', 'single'])[0]!,
    visits: faker.datatype.number(1000),
  };
};

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const len = lens[depth]!;
    return range(len).map((_d): Person => {
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
  title: 'Table',
};
export default Story;

const Template: ComponentStory<typeof Table> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      gray: {
        ...(base.color['gray'] as Record<ColorShade, string>),
        //   '700': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.TABLE}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};

const columns: ColumnDef<Person>[] = [
  {
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: () => <span>First Name</span>,
        id: 'firstName',
      },
      {
        accessorFn: (row) => row.lastName,
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: () => <span>Last Name</span>,
        id: 'lastName',
      },
    ],
  },
  {
    header: 'Info',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: (props) => props.column.id,
      },
      {
        header: 'More Info',
        columns: [
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            footer: (props) => props.column.id,
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
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Walton',
    role: 'Member',
    status: 'Active',
    title: 'Front-end Developer',
  },
  {
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Walton',
    role: 'Member',
    status: 'Active',
    title: 'Front-end Developer',
  },
  {
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Walton',
    role: 'Member',
    status: 'Active',
    title: 'Front-end Developer',
  },
];

export const Secondary = Template.bind({});

Secondary.args = {
  columns: [
    {
      header: 'Name',
      accessorKey: 'name',
      cell: ({ getValue }) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={getValue().image} alt="" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{getValue().name}</div>
            <div className="text-gray-500">{getValue().email}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Role',
      accessorKey: 'role',
    },
    {
      header: 'Email address',
      accessorKey: 'email',
    },
  ] as ColumnDef<Person, Record<string, string>>[],
  data: people.map(({ name, department, email, image, role, status, title }) => ({
    department,
    email,
    name: {
      email,
      image,
      name,
    },
    role,
    status,
    title,
  })),
  header: () => (
    <div className="sm:flex sm:items-center px-6 py-3">
      <div className="sm:flex-auto">
        <Typography size="xl">Users</Typography>
        <Typography size="sm" color="gray-700">
          A list of all the users in your account including their name, title, email and role.
        </Typography>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <Button label="Add User" />
      </div>
    </div>
  ),
};

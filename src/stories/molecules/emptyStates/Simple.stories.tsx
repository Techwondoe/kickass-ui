import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Simple, Props } from '../../../components/molecules/emptyStates/Simple';

const meta: Meta = {
  title: 'Empty states/Simple',
  component: Simple,
};

export default meta;

const Template: Story<Props> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      />
    </svg>
  ),
  title: 'No results found',
  description: 'Get started by creating a new project.',
  action: {
    icon: PlusIcon as React.ElementType,
    label: 'New project',
    onClick: () => {
      alert('New project');
    },
  },
};

export const WithDashedBorder = Template.bind({});
WithDashedBorder.args = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 48 48"
      aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
      />
    </svg>
  ),
  title: 'Create a new database',
  withDashBorder: true,
};

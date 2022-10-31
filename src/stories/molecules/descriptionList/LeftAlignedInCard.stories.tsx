import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  LeftAlignedInCard,
  Props,
} from '../../../components/molecules/descriptionList/LeftAlignedInCard';

const meta: Meta = {
  title: 'Empty states/Left aligned in card',
  component: LeftAlignedInCard,
  argTypes: {
    title: {
      defaultValue: 'Applicant Information',
    },
    description: {
      defaultValue: 'Applicant information and application.',
    },
    tableData: {
      defaultValue: [
        {
          label: 'Full name',
          value: 'Manikangkan Das',
        },
        {
          label: 'Application for',
          value: 'Full Stack Developer',
        },
        {
          label: 'Email address',
          value: 'manikangkan.das@outlook.com',
        },
        {
          label: 'Salary expectation',
          value: '$120,000',
        },
        {
          label: 'About',
          value:
            'I am a full stack developer & ui/ux designer with 2 years of experience in React,Next, Node, Express, MongoDB with product design, development, quality assurance, testing. I am looking for a job in a reputed company.',
        },
      ],
    },
    attachments: {
      defaultValue: [
        {
          label: 'Attachments',
          items: [
            {
              label: 'Resume',
              actionLabel: 'Download',
            },
            {
              label: 'Cover letter',
              actionLabel: 'Preview',
            },
          ],
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <LeftAlignedInCard {...args} />;

export const Default = Template.bind({});
export const LeftAlignedStripedInCard = Template.bind({});
LeftAlignedStripedInCard.args = {
  striped: true,
};

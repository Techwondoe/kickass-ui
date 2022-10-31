import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  WithLeftLabelAndDescription,
  Props,
} from '../../../components/molecules/toggles/WithLeftLabelAndDescription';

const meta: Meta = {
  title: 'Toggles/With left label and description',
  component: WithLeftLabelAndDescription,
  argTypes: {
    label: {
      defaultValue: 'Available to hire',
    },
    details: {
      defaultValue: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithLeftLabelAndDescription {...args} />;

export const Default = Template.bind({});

import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import DirectionMetric from '../components/atoms/DirectionMetric/DirectionMetric';

const Story: ComponentMeta<typeof DirectionMetric> = {
  component: DirectionMetric,
  title: 'DirectionMetric',
};
export default Story;

const Template: ComponentStory<typeof DirectionMetric> = (args) => <DirectionMetric {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayValue: 'Market',
  value: 24,
  limit: 24,
};

export const Low = Template.bind({});
Low.args = {
  displayValue: 'Market',
  value: 24,
  limit: 36,
};

export const High = Template.bind({});
High.args = {
  displayValue: 'Market',
  value: 36,
  limit: 24,
};

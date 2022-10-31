import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tooltip, TooltipProps } from '../../../components/molecules/Tooltip';
import { Button } from '../../../components/atoms/Button';

export default {
  title: 'Forms/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => {
  return (
    <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover Me Lorem ipsum lorem ipsum lorem ipsum</Button>
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'hello',
};

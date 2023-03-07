import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from '../components/atoms/Button/Button'
import { Item } from '../components/atoms/sidebar/menu';
import {UserProfile} from '../components/atoms/UserProfile/user-profile'
import { Dropdown } from '../components/atoms/Dropdown/dropdown';
import React from 'react';

const Story: ComponentMeta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Forms/Dropdown',
};
export default Story;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <Dropdown {...args}>
        <Dropdown.Button>
          <Button label="Account" variant="outlined" color="gray" />
        </Dropdown.Button>
        <Dropdown.Panel>
          <div className="w-[256px] my-3 bg-white rounded-md shadow-lg border border-gray-100">
            <div className="px-3 py-2">
              <UserProfile
                name="Siva Vepada"
                subTitle="Developer"
                avatar="https://avatars.githubusercontent.com/u/28987707?s=96&v=4"
              />
            </div>
            <div className="border-b border-gray-100" />
            <Item title="My Settings" icon="settings-01" />
            <Item title="Company" icon="message-smile-circle" className="mb-0" />
            <Item title="Support" icon="help-circle" className="mb-0" />
            <div className="border-b border-gray-100" />
            <Item title="Log out" icon="log-out-01" className="mb-0" />
          </div>
        </Dropdown.Panel>
      </Dropdown>
    </div>
  );
};

export const Regular = Template.bind({});
Regular.args = {};

import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/atoms/Avatar/Avatar';
import { Typography } from '../components/atoms/Typography/Typography';
import { SearchInputField } from '../components/atoms/SearchInput/search-input';
import React from 'react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';

const Story: ComponentMeta<typeof SearchInputField> = {
  component: SearchInputField,
  title: 'Forms/Search Input Field',
};
export default Story;

const Template: ComponentStory<typeof SearchInputField> = (args) => {
  const customTheme = extendTheme(base, {
    ...base,
    color: {
      ...base.color,
      gray: {
        ...(base.color.gray as Record<ColorShade, string>),
        // '500': 'red',
      },
    },
  });
  return (
    <ComponentWithColors
      componentName={ComponentName.SEARCHINPUT}
      componentProps={args}
      customTheme={customTheme}
    />
  );
};


export const Text = Template.bind({});
Text.args = {
  hint: 'This is a sample hint',
  items: [
    {
      id: 'pheonix',
      name: 'Pheonix',
    },
    {
      id: 'cian',
      name: 'Cian Mcloughlin',
    },
    {
      id: 'lana',
      name: 'Lana Steiner',
    },
  ],
  label: 'Name',
  placeholder: 'Siva Nagendra Kumar Vepada',
  renderItem: ({ id, name }: { id: string; name: string }) => (
    <div key={id} className="flex items-center gap-2 flex-wrap">
      <Avatar src="https://avatars.githubusercontent.com/u/28987707?s=96&v=4" size="xs" />
      <Typography color="gray-900">{name}</Typography>
      <Typography color="gray-500">{`@${id}`}</Typography>
    </div>
  ),
  searchKeys: ['name'],
};

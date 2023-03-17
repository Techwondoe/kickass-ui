import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/atoms/Avatar/Avatar';
import { Tag } from '../components/atoms/Tag/tag';
import { Typography } from '../components/atoms/Typography/Typography';
import { MultiSearchInputField } from '../components/atoms/MultiSearchInput/multi-search-input';
import React from 'react';
import { ComponentWithColors, ComponentName } from '~/helpers/extend-colors-storybook';
import { extendTheme, base, ColorShade } from '~/themes';
const Story: ComponentMeta<typeof MultiSearchInputField> = {
  component: MultiSearchInputField,
  title: 'Forms/MultiSearchInputField',
};
export default Story;

const Template: ComponentStory<typeof MultiSearchInputField> = (args) => {
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
      componentName={ComponentName.MULTISEARCHINPUT}
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
      avatar: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
    },
    {
      id: 'cian',
      name: 'Cian Mcloughlin',
      avatar: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
    },
    {
      id: 'lana',
      name: 'Lana Steiner',
      avatar: 'https://avatars.githubusercontent.com/u/28987707?s=96&v=4',
    },
  ],
  label: 'Name',
  placeholder: 'Siva Nagendra Kumar Vepada',
  renderItem: ({ id, name, avatar }: { avatar: string; id: string; name: string }) => (
    <div key={id} className="flex items-center gap-2 flex-wrap">
      <Avatar src={avatar} size="xs" />
      <Typography color="gray-900">{name}</Typography>
      <Typography color="gray-500">{`@${id}`}</Typography>
    </div>
  ),
  renderSelectedItem: (
    { id, name, avatar }: { avatar: string; id: string; name: string },
    { unselect }: { unselect: (() => void) | undefined }
  ) => <Tag label={name} key={id} avatar={avatar} closable onClose={unselect} />,
  searchKeys: ['name'],
};

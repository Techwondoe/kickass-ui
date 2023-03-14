import React, { ElementType } from 'react';
import { Theme, ThemeProvider } from '~/themes';
import { Button, ButtonProps } from '~/components/atoms/Button/Button';
import { Avatar, AvatarProps } from '~/components/atoms/Avatar/Avatar';
import { Badge, BadgeProps } from '~/components/atoms/Badge/Badge';
import { DirectionMetric, DirectionMetricProps } from '~/components/atoms/DirectionMetric/DirectionMetric';
import { TextField, TextFieldProps } from '~/components/atoms/TextField';
import { Typography, TypographyProps } from '~/components/atoms/Typography/Typography';
import { Divider, DividerProps } from '~/components/atoms/Divider/divider';
import { IconBadge, IconBadgeProps } from '~/components/atoms/IconBadge/IconBadge';
// You need this file for themes to work as expected.
// Please run the command storybook-css or copy them manually from /dist/index.css
import './index.css';

export enum ComponentName {
  AVATAR = 'avatar',
  BUTTON = 'button',
  DIRECTIONMETRIC='DirectionMetric',
  TEXTFIELD = 'textfield',
  TYPOGRAPHY = 'typography',
  BADGE = 'Badge',
  DIVIDER = 'Divider',
  ICONBADGE='IconBadge'

}
export type ComponentProps =
  | TextFieldProps
  | TypographyProps
  | ButtonProps
  | AvatarProps
  | BadgeProps
  | DirectionMetricProps
  | DividerProps
  | IconBadgeProps;

export const ComponentMapper: Record<ComponentName, ElementType> = {
  [ComponentName.TEXTFIELD]: TextField,
  [ComponentName.BADGE]: Badge,
  [ComponentName.TYPOGRAPHY]: Typography,
  [ComponentName.BUTTON]: Button,
  [ComponentName.AVATAR]: Avatar,
  [ComponentName.DIRECTIONMETRIC]: DirectionMetric,
  [ComponentName.DIVIDER]: Divider,
  [ComponentName.ICONBADGE]: IconBadge,
};

export interface ComponentWithColorProps {
  componentName: ComponentName;
  componentProps: ComponentProps;
  customTheme?: Theme;
}

export const ComponentWithColors = ({
  componentName,
  componentProps,
  customTheme,
}: ComponentWithColorProps) => {
  const Component = ComponentMapper[componentName];
  return (
    <ThemeProvider customTheme={customTheme || undefined}>
      <Component {...componentProps} />
    </ThemeProvider>
  );
};

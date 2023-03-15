import React, { ElementType } from 'react';
import { Theme, ThemeProvider } from '~/themes';
import { Button, ButtonProps } from '~/components/atoms/Button/Button';
import { Card, CardProps } from '~/components/atoms/card/card';
import { Avatar, AvatarProps } from '~/components/atoms/Avatar/Avatar';
import { Badge, BadgeProps } from '~/components/atoms/Badge/Badge';
import {
  DirectionMetric,
  DirectionMetricProps,
} from '~/components/atoms/DirectionMetric/DirectionMetric';
import { TextField, TextFieldProps } from '~/components/atoms/TextField';
import { Typography, TypographyProps } from '~/components/atoms/Typography/Typography';
import { Divider, DividerProps } from '~/components/atoms/Divider/divider';
import { IconBadge } from '~/components/atoms/IconBadge/IconBadge';
import { Icon, IconProps } from '~/components/atoms/icon/icon';
import { ProgressBar, ProgressBarProps } from '~/components/atoms/ProgressBar/progress-bar';
import { Toggle, ToggleProps } from '~/components/atoms/toggle/toggle';
import { EmptySection, EmptySectionProps } from '~/components/atoms/EmptySection/empty-section';
import { Pagination, PaginationProps } from '~/components/atoms/Pagination/pagination';
import { Table, TableProps } from '~/components/atoms/table/table';
import { Tag, TagProps } from '~/components/atoms/Tag/tag';

// You need this file for themes to work as expected.
// Please run the command storybook-css or copy them manually from /dist/index.css
import './index.css';

export enum ComponentName {
  AVATAR = 'Avatar',
  BADGE = 'Badge',
  BUTTON = 'Button',
  CARD = 'Card',
  DIRECTIONMETRIC = 'DirectionMetric',
  DIVIDER = 'Divider',
  EMPTYSECTION = 'EmptySection',
  ICON = 'Icon',
  ICONBADGE = 'IconBadge',
  PAGINATION = 'Pagination',
  PROGRESSBAR = 'ProgressBar',
  TABLE = 'Table',
  TAG = 'Tag',
  TEXTFIELD = 'Textfield',
  TOGGLE = 'Toggle',
  TYPOGRAPHY = 'Typography',
}
export type ComponentProps =
  | TextFieldProps
  | CardProps
  | TypographyProps
  | ButtonProps
  | AvatarProps
  | BadgeProps
  | DirectionMetricProps
  | IconProps
  | DividerProps
  | ProgressBarProps
  | ToggleProps
  | EmptySectionProps
  | PaginationProps
  | TableProps
  | TagProps;

export const ComponentMapper: Record<ComponentName, ElementType> = {
  [ComponentName.TYPOGRAPHY]: Typography,
  [ComponentName.AVATAR]: Avatar,
  [ComponentName.BADGE]: Badge,
  [ComponentName.CARD]: Card,
  [ComponentName.TEXTFIELD]: TextField,
  [ComponentName.BUTTON]: Button,
  [ComponentName.DIRECTIONMETRIC]: DirectionMetric,
  [ComponentName.DIVIDER]: Divider,
  [ComponentName.ICONBADGE]: IconBadge,
  [ComponentName.ICON]: Icon,
  [ComponentName.PROGRESSBAR]: ProgressBar,
  [ComponentName.TOGGLE]: Toggle,
  [ComponentName.EMPTYSECTION]: EmptySection,
  [ComponentName.PAGINATION]: Pagination,
  [ComponentName.TABLE]: Table,
  [ComponentName.TAG]: Tag,
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

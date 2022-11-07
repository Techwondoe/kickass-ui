import React, { ElementType } from 'react';
import {
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from '~/components/atoms';
import { Theme, ThemeProvider } from '~/themes';
// You need this file for themes to work as expected.
// Please run the command storybook-css or copy them manually from /dist/index.css
import './index.css';

export enum ComponentName {
  BUTTON = 'button',
  TEXTFIELD = 'textfield',
  TYPOGRAPHY = 'typography',
}
export type ComponentProps = TextFieldProps | TypographyProps | ButtonProps;

export const ComponentMapper: Record<ComponentName, ElementType> = {
  [ComponentName.TEXTFIELD]: TextField,
  [ComponentName.TYPOGRAPHY]: Typography,
  [ComponentName.BUTTON]: Button,
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

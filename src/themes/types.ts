export interface FontParams {
  letterSpacing: string;
  lineHeight: string;
  size: string;
}

export enum FontSize {
  '2XL' = '2xl',
  LG = 'lg',
  MD = 'md',
  SM = 'sm',
  XL = 'xl',
  XS = 'xs',
}

export interface Font {
  display: Record<FontSize, FontParams>;
  text: Record<FontSize, FontParams>;
}

export type ColorShade =
  | '25'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'DEFAULT';

export type ColorNames = 'white' | 'black' | 'gray' | 'primary' | 'error' | 'warning' | 'success';
export type Color = Record<ColorNames, Record<ColorShade, string> | string>;
//

export interface Theme {
  color: Color;
  font: Font;
}

export interface MappedTheme {
  [key: string]: string | null;
}

export interface ApplyThemeProps {
  customTheme?: Theme;
  theme: string;
}

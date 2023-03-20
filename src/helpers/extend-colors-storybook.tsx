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
import { UserProfile, UserProfileProps } from '~/components/atoms/UserProfile/user-profile';
import { AmountInputField, AmountInputProps } from '~/components/atoms/AmountInput/AmountInput';
import { Calendar, CalendarProps } from '~/components/atoms/calendar/calendar';
import { Checkbox, CheckboxProps } from '~/components/atoms/checkbox/checkbox';
import { ColorPicker, ColorPickerProps } from '~/components/atoms/ColorPicker/ColorPicker';
import { CopyInputField, CopyInputProps } from '~/components/atoms/CopyInput/CopyInput';
import { DatePicker, DatePickerProps } from '~/components/atoms/date-picker/date-picker';
import {
  DatePickerDropdown,
  DatePickerDropdownProps,
} from '~/components/atoms/date-picker-dropdown/date-picker-dropdown';
import { MailInputField, MailInputProps } from '~/components/atoms/MailInput/mail-input';
import {
  MultiSearchInputField,
  MultiSearchInputProps,
} from '~/components/atoms/MultiSearchInput/multi-search-input';
import {
  PasswordInputField,
  PasswordInputProps,
} from '~/components/atoms/PasswordInput/password-input';
import { PhoneInputField, PhoneInputProps } from '~/components/atoms/PhoneInput/phone-input';
import { Radio, RadioProps } from '~/components/atoms/Radio/Radio';
import { SearchInputField, SearchInputProps } from '~/components/atoms/SearchInput/search-input';
import { SelectInputField, SelectInputProps } from '~/components/atoms/SelectInput/select-input';
import { SiteInputField, SiteInputProps } from '~/components/atoms/SelectInput/site-input';
import { TextInputField, TextInputProps } from '~/components/atoms/TextInput/text-input';
import { UploadItem, UploadItemsProps } from '~/components/atoms/uploadItem/upload-item';
import { Upload, UploadProps } from '~/components/atoms/upload/upload';
import { ButtonGroup, ButtonGroupProps } from '~/components/atoms/ButtonGroup/ButtonGroup';
import { ButtonWrapper } from '~/components/atoms/ButtonWrapper/ButtonWrapper';
import {
  IconButtonGroup,
  IconButtonGroupProps,
} from '~/components/atoms/iconButtonGroup/icon-button-group';
import { IconButton, IconButtonProps } from '~/components/atoms/iconButton/icon-button';

// You need this file for themes to work as expected.
// Please run the command storybook-css or copy them manually from /dist/index.css
import './index.css';

export enum ComponentName {
  AMOUNTINPUT = 'AmountInputField',
  AVATAR = 'Avatar',
  BADGE = 'Badge',
  BUTTON = 'Button',
  BUTTONGROUP = 'ButtonGroup',
  BUTTONWRAPPER = 'ButtonWrapper',
  CALENDAR = 'Calendar',
  CARD = 'Card',
  CHECKBOX = 'Checkbox',
  COLORPICKER = 'ColorPicker',
  COPYINPUT = 'CopyInputField',
  DATEPICKER = 'DatePicker',
  DATEPICKERDROPDOWN = 'DatePickerDropdown',
  DIRECTIONMETRIC = 'DirectionMetric',
  DIVIDER = 'Divider',
  EMPTYSECTION = 'EmptySection',
  ICON = 'Icon',
  ICONBADGE = 'IconBadge',
  ICONBUTTON = 'IconButton',
  ICONBUTTONGROUP = 'IconButtonGroup',
  MAILINPUT = 'MailInputField',
  MULTISEARCHINPUT = 'MultiSearchInputField',
  PAGINATION = 'Pagination',
  PASSWORDINPUT = 'PasswordInputField',
  PHONEINPUT = 'PhoneInputField',
  PROGRESSBAR = 'ProgressBar',
  RADIO = 'Radio',
  SEARCHINPUT = 'SearchInputField',
  SELECTINPUT = 'SelectInputField',
  SITEINPUT = 'SiteInputField',
  TABLE = 'Table',
  TAG = 'Tag',
  TEXTFIELD = 'Textfield',
  TEXTINPUT = 'TextInputField',
  TOGGLE = 'Toggle',
  TYPOGRAPHY = 'Typography',
  UPLOAD = 'Upload',
  UPLOADITEM = 'UploadItem',
  USERPROFILE = 'UserProfile',
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
  | TagProps
  | UserProfileProps
  | AmountInputProps
  | CalendarProps
  | CheckboxProps
  | ColorPickerProps
  | CopyInputProps
  | DatePickerProps
  | DatePickerDropdownProps
  | MailInputProps
  | MultiSearchInputProps
  | PasswordInputProps
  | PhoneInputProps
  | RadioProps
  | SearchInputProps
  | SelectInputProps
  | SiteInputProps
  | TextInputProps
  | UploadItemsProps
  | UploadProps
  | ButtonGroupProps
  | IconButtonGroupProps
  | IconButtonProps;

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
  [ComponentName.USERPROFILE]: UserProfile,
  [ComponentName.AMOUNTINPUT]: AmountInputField,
  [ComponentName.CALENDAR]: Calendar,
  [ComponentName.CHECKBOX]: Checkbox,
  [ComponentName.COLORPICKER]: ColorPicker,
  [ComponentName.COPYINPUT]: CopyInputField,
  [ComponentName.DATEPICKER]: DatePicker,
  [ComponentName.DATEPICKERDROPDOWN]: DatePickerDropdown,
  [ComponentName.MAILINPUT]: MailInputField,
  [ComponentName.MULTISEARCHINPUT]: MultiSearchInputField,
  [ComponentName.PASSWORDINPUT]: PasswordInputField,
  [ComponentName.PHONEINPUT]: PhoneInputField,
  [ComponentName.RADIO]: Radio,
  [ComponentName.SEARCHINPUT]: SearchInputField,
  [ComponentName.SELECTINPUT]: SelectInputField,
  [ComponentName.SITEINPUT]: SiteInputField,
  [ComponentName.TEXTINPUT]: TextInputField,
  [ComponentName.UPLOADITEM]: UploadItem,
  [ComponentName.UPLOAD]: Upload,
  [ComponentName.BUTTONGROUP]: ButtonGroup,
  [ComponentName.BUTTONWRAPPER]: ButtonWrapper,
  [ComponentName.ICONBUTTONGROUP]: IconButtonGroup,
  [ComponentName.ICONBUTTON]: IconButton,
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

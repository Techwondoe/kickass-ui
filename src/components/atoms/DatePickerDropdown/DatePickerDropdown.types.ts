import { ButtonProps } from '../Button';
import { DatePickerProps } from '../DatePicker';
import { CalendarValue } from '../calendar/hooks/useCalendar';

/**
 * Defines the props for the Date Picker Dropdown component
 * @param buttonColor - Color of the button
 * @param buttonSelected - Whether the component is selected
 * @param buttonVariant - Variant of the component
 * @param hidePresetRanges - Whether preset ranges should be hidden or not
 * @param onChange - OnChange Function to be passed to the component
 * @param type - Type of component, whether single or range
 * @param value - Value of the component
 */

export interface DatePickerDropdownProps {
  buttonColor?: ButtonProps['color'];
  buttonSelected?: boolean;
  buttonVariant?: ButtonProps['variant'];
  hidePresetRanges?: DatePickerProps['hidePresetRanges'];
  onChange?: (value: CalendarValue) => void;
  type?: DatePickerProps['type'];
  value?: CalendarValue;
  className?:string
}

import { CalendarValue } from '../calendar/hooks/useCalendar';

/**
 * Defines the props for the Date Picker component
 * @param defaultValue - Default value of datepicker
 * @param hideActions - Whether to hide the actions or not
 * @param hidePresetRanges - Whether to hide preset range
 * @param onApply - onApply function to be passed
 * @param onCancel - onCancel function to be passed
 * @param type - Single Valued or Range of dates
 */

export interface DatePickerProps {
  defaultValue?: CalendarValue;
  hideActions?: boolean;
  hidePresetRanges?: boolean;
  onApply?: (value: CalendarValue) => void;
  onCancel?: () => void;
  type?: 'single' | 'range';
  className?:string
}

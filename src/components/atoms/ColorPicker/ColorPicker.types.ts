/**
 * @param directionMetric- The content of the button
 * @param status - Status array
 * @param title - Title in a card
 * @param value - Value in card
 */

export interface ColorPickerProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

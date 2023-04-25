/**
 * Defines the props for the Direction Metric component
 * @param displayValue - What string shall be displayed
 * @param limit - What is the limit
 * @param value - What is the value
 */

export interface DirectionMetricProps {
  className?: string;
  displayValue?: string;
  limit: number;
  value: number;
}

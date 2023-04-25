/**
 * @param directionMetric- The content of the button
 * @param status - Status array
 * @param title - Title in a card
 * @param value - Value in card
 */

export interface CardProps {
  directionMetric: {
    data: {
      limit: number;
      value: number;
    };
    description: string;
  };
  status: {
    isComplete: boolean;
    label: string;
  }[];
  title: string;
  value: number;
}

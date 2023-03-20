
/**
 * @params directionMetric- The content of the button
 * @params status - Status array
 * @params title - Title in a card
 * @params value - Value in card
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

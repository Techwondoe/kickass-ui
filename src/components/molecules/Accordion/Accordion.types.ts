import { ColorCodes } from '~/constants/types';

export interface AccordionData {
  content: string;
  title: string;
}

/**
 * @params accordoinData - Array containing title and content text
 * @params contentColor - Color for content inside
 * @params titleColor - Color for title text
 */
export interface AccordionProps {
  accordoinData: AccordionData[];
  contentColor?: ColorCodes;
  titleColor?: ColorCodes;
}

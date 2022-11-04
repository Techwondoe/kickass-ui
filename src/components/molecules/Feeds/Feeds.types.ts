import { IconType } from '~/constants/types';

/**
 * @params content - Additional text for the timeline item
 * @params date - date text for the timeline item
 * @params datetime - date param for <time/> component
 * @params href - href redirect for the timeline item
 * @params icon - Icon component for the timeline item
 * @params iconBackground - css style for icon
 * @params id - unique id for for the timeline id
 * @params target - text to display on href component
 */
interface Timeline {
  content: string;
  date: string;
  datetime: string;
  href: string;
  icon: IconType;
  iconBackground: string;
  id: number;
  target: string;
}

/**
 * @params timeline - Timeline array for timeline items
 */
export interface FeedsWithIconsProps {
  timeline: Timeline[];
}

/**
 * @params commit - deploy time displayed on UI
 * @params environment - environment text on UI
 * @params id - unique id for for the timeline id
 * @params person - contains image source url and name params to be displayed
 * @params project - project name
 * @params time - time text to be displayed
 */
export interface ActivityItems {
  commit: string;
  environment: string;
  id: number;
  person: {
    imageUrl: string;
    name: string;
  };
  project: string;
  time: string;
}
/**
 * @params activityitems - Array of activity items
 */
export interface FeedsWithAvatarsProps {
  activityItems: ActivityItems[];
}

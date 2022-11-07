import { IconType } from '~/constants/types';

export enum StatItemChangeType {
  DECREASE = 'decrease',
  INCREASE = 'increase',
}

/**
 * @params name - Title for the stat
 * @params stat - Stat value
 */
export interface StatItem {
  name: string;
  stat: string;
}

/**
 * @params change - Additional text for stat item
 * @params changeType - Flag to display change UI
 * @params icon - Icon component for stat item
 * @params id - unique id for the stat item
 */
export interface StatItemWithBrandIcon extends StatItem {
  change: string;
  changeType: StatItemChangeType;
  icon: IconType;
  id: number | string;
}

/**
 * @params previousStat - Previous stat value additional text
 */
export interface StatItemWithSharedBorder extends Omit<StatItemWithBrandIcon, 'icon'> {
  previousStat: string;
}

/**
 * @params stats - Array of StatItem
 */
export interface StatsProps {
  stats: StatItem[];
}

/**
 * @params stats - Array of StatItemWithBrandIcon
 */
export interface StatsWithBrandIconProps {
  stats: StatItemWithBrandIcon[];
}

/**
 * @params stats - Array of StatItemWithSharedBorder
 */
export interface StatsWithSharedBordersProps {
  stats: StatItemWithSharedBorder[];
}

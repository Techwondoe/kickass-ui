import { IconButtonProps } from '../iconButton';
/**
 * @param className - ClassNames to be passed to the component
 * @param items - items for the component
 * @param orientation - Whether it should be horizontal or vertical
 */
export interface IconButtonGroupProps extends Pick<IconButtonProps, 'color' | 'size' | 'variant'> {
  className?: string;
  items: Array<Omit<IconButtonProps, 'color' | 'size' | 'variant' | 'shape'>>;
  orientation?: 'horizontal' | 'vertical';
}

import { ButtonProps } from '../Button/Button.types';

/**
 * @param EndIcon - The icon to be displayed at the end of the button
 * @param StartIcon - The icon to be displayed at the start of the button
 * @param children - The content of the button
 * @param className - Override or extend the styles applied to the component
 * @param color - Color of the button. It supports those theme colors that make sense for this component.
 * @param fullWidth - If true, the button will take up the full width of its container.
 * @param href - The URL to link to when the button is clicked.
 * @param shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @param size - Size of the button. It supports those theme sizes that make sense for this component.
 * @param variant - Variant of the button. It supports those theme variants that make sense for this component.
 * @param orientation - Horizontal/Vertical Orientation of button group.
 */
export interface ButtonGroupProps
  extends Pick<ButtonProps, 'color' | 'size' | 'variant' | 'icon' | 'endIcon'> {
  className?: string;
  items: Array<Omit<ButtonProps, 'color' | 'size' | 'variant' | 'shape'>>;
  orientation?: 'horizontal' | 'vertical';
}

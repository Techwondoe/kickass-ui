import { ButtonProps } from "../Button/Button.types";

/**
 * @params EndIcon - The icon to be displayed at the end of the button
 * @params StartIcon - The icon to be displayed at the start of the button
 * @params children - The content of the button
 * @params className - Override or extend the styles applied to the component
 * @params color - Color of the button. It supports those theme colors that make sense for this component.
 * @params fullWidth - If true, the button will take up the full width of its container.
 * @params href - The URL to link to when the button is clicked.
 * @params shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @params size - Size of the button. It supports those theme sizes that make sense for this component.
 * @params variant - Variant of the button. It supports those theme variants that make sense for this component.
 * @params orientation - Horizontal/Vertical Orientation of button group.
 */
export interface ButtonGroupProps
  extends Pick<ButtonProps, 'color' | 'size' | 'variant' | 'icon' | 'endIcon'> {
  className?: string;
  items: Array<Omit<ButtonProps, 'color' | 'size' | 'variant' | 'shape'>>;
  orientation?: 'horizontal' | 'vertical';
}
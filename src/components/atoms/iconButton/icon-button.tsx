import React from "react";
import { HTMLAttributes } from "react";
import { ColorType, PrimaryColorType } from "../../../types/colors";
import { Icon, IconType } from "../icon";

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
 */
export interface IconButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    icon: IconType;
    className?: string;
    color?: Exclude<PrimaryColorType, "white" | "black">;
    href?: string;
    shape?: "rounded" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    variant?: "contained" | "outlined" | "light" | "text" | "link";
    disabled?: boolean;
    selected?: boolean;
}
const sizes = {
    sm: "w-9 h-9",
    md: "w-10 h-10",
    lg: "w-11 h-11",
    xl: "w-12 h-12",
    "2xl": "w-14 h-14",
};

const shapes = {
    rounded: "rounded-full",
    square: "rounded",
};

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function IconButton({
    variant = "contained",
    color = "primary",
    size = "md",
    icon,
    href,
    shape = "square",
    className = "",
    disabled = false,
    selected = false,
    ...restProps
}: IconButtonProps) {
    const variants = {
        contained: {
            button: `${
                selected ? `bg-${color}-700` : `bg-${color}-600`
            } hover:bg-${color}-700 focus:ring-4 ring-${color}-100 disabled:bg-${color}-200`,
            typo: ``,
            icon: ``,
        },
        outlined: {
            button: `${
                selected ? `bg-${color}-50` : `bg-white`
            } border border-${color}-300 hover:bg-${color}-50 focus:ring-4 ring-${color}-100 disabled:border-${color}-200`,
            typo: ``,
            icon: ``,
        },
        light: {
            button: `${
                selected ? `bg-${color}-100` : `bg-${color}-50`
            } hover:bg-${color}-100 focus:ring-4 ring-${color}-100 disabled:bg-${color}-25`,
            typo: ``,
            icon: ``,
        },
        text: {
            button: `${selected ? `bg-${color}-50` : ``} hover:bg-${color}-50`,
            typo: ``,
            icon: ``,
        },
        link: {
            button: `cursor-pointer`,
            typo: ``,
            icon: ``,
        },
    };
    const classes = `group flex flex-row items-center justify-center disabled:cursor-not-allowed ${variants[variant].button} ${sizes[size]} ${shapes[shape]} ${className}`;

    const iconClassName =
        variant !== "contained"
            ? `${
                  selected ? `stroke-${color}-800` : ``
              } group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`
            : "";
    const typoColor =
        variant === "contained"
            ? "white"
            : ((selected ? `${color}-800` : `${color}-700`) as ColorType);
    const iconSize = size === "2xl" ? 24 : 20;

    const children = (
        <Icon
            name={icon}
            color={typoColor}
            size={iconSize}
            className={iconClassName}
        />
    );

    return variant === "link" ? (
        <a className={classes} href={href} {...restProps}>
            {children}
        </a>
    ) : (
        <button className={classes} {...restProps} disabled={disabled}>
            {children}
        </button>
    );
}

export default IconButton;

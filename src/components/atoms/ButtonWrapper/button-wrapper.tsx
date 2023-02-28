import React from "react";
import { HTMLAttributes } from "react";
import { PrimaryColorType } from "../../../types/colors";

/**
 * @params children - The content of the button
 * @params className - Override or extend the styles applied to the component
 * @params color - Color of the button. It supports those theme colors that make sense for this component.
 * @params fullWidth - If true, the button will take up the full width of its container.
 * @params shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @params size - Size of the button. It supports those theme sizes that make sense for this component.
 * @params variant - Variant of the button. It supports those theme variants that make sense for this component.
 */
export interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    className?: string;
    color?: Exclude<PrimaryColorType, "white" | "black">;
    shape?: "rounded" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    variant?: "contained" | "outlined" | "light";
    disabled?: boolean;
    selected?: boolean;
}
const sizes = {
    sm: "px-[7px] py-1",
    md: "px-2 py-[5px]",
    lg: "px-[9px] py-[5px]",
    xl: "px-2.5 py-1.5",
    "2xl": "px-3.5 py-2",
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

export function ButtonWrapper({
    variant = "contained",
    color = "primary",
    size = "md",
    shape = "square",
    className = "",
    disabled = false,
    selected = false,
    children,
    ...restProps
}: ButtonProps) {
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

    const classes = `group disabled:cursor-not-allowed ${variants[variant].button} ${shapes[shape]} ${sizes[size]} whitespace-nowrap ${className}`;

    return (
        <button className={classes} {...restProps} disabled={disabled}>
            {children}
        </button>
    );
}

// export default ButtonWrapper;

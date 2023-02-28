/**
 * @params color - Text color for badge with color/20 background
 * @params label - Text within badge
 */

import React from "react";
import { ColorType, ColorVariantType } from "../../../types/colors";
import {Avatar} from "../Avatar/Avatar";
import { Icon, IconType } from "../icon";
import {Typography} from '../Typography/Typography';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: Exclude<ColorType, "white" | "black">;
    label: string;
    size?: "sm" | "md" | "lg";
    icon?: IconType;
    endIcon?: IconType;
    avatar?: string;
    status?: "online" | "offline" | "away";
}
const relevantStyleToSize = {
    sm: "px-2 py-0.5",
    md: "px-2.5 py-0.5 h-6",
    lg: "px-3 py-1 h-7",
};

export function Badge({
    label,
    color = "gray",
    icon,
    endIcon,
    size = "md",
    avatar,
    status = "offline",
    ...props
}: BadgeProps) {
    return (
        <div
            {...props}
            className={`inline-flex gap-1.5 items-center rounded-full bg-${color}-50 ${
                relevantStyleToSize[size]
            } ${props?.className ?? ""}`}
        >
            {icon && (
                <Icon
                    name={icon}
                    size={12}
                    color={`${color}-500` as ColorType}
                />
            )}
            {status !== "offline" && (
                <div className={`w-1.5 h-1.5 bg-${color}-500 rounded-full`} />
            )}
            {avatar && (
                <Avatar src={avatar} name={label ?? ""} className="w-4 h-4" />
            )}
            <Typography
                variant="p"
                color={`${color}-700` as ColorVariantType}
                size={size === "sm" ? "xs" : "sm"}
                weight="medium"
                className="whitespace-nowrap"
            >
                {label}
            </Typography>
            {endIcon && (
                <Icon
                    name={endIcon}
                    size={12}
                    color={`${color}-500` as ColorType}
                />
            )}
        </div>
    );
}

// export default Badge;

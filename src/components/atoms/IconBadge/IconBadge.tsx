/**
 * @params color - Text color for badge with color/20 background
 * @params label - Text within badge
 */

import React from "react";
import { ColorType } from "../../../types/colors";
import { Icon, IconType } from "../icon";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: Exclude<ColorType, "white" | "black">;
    size?: "sm" | "md" | "lg";
    icon: IconType;
    className?: string;
}
const relevantStyleToSize: any = {
    sm: "justify-center w-5 h-5",
    md: "justify-center w-6 h-6",
    lg: "justify-center w-7 h-7",
};

export function IconBadge({
    color = "gray",
    icon,
    size = "md",
    ...props
}: BadgeProps) {
    return (
        <div
            {...props}
            className={`inline-flex gap-1.5 items-center rounded-full bg-${color}-50 ${
                relevantStyleToSize[size]
            } ${props?.className ?? ""}`}
        >
            <Icon name={icon} size={12} color={`${color}-500` as ColorType} />
        </div>
    );
}

export default IconBadge;

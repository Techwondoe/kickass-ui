import { FC, useMemo } from "react";
import { iconPack } from "./icon-list";
import type { IconType } from "./icon-list";
import { ColorVariantType } from "../../../types/colors";
import React from "react";

export interface IconProps {
    name: IconType;
    color?: ColorVariantType;
    size?: number;
    className?: string;
    onClick?: () => void;
}

export const Icon: FC<IconProps> = ({
    name,
    color = "gray-900",
    size = 20,
    className,
    onClick,
}) => {
    const SVGIcon = useMemo(() => iconPack[name], [name]);
    const isSizeANumber = typeof size === "number";
    return (
        <SVGIcon
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={
                (!isSizeANumber ? `w-[${size}px] h-[${size}px]` : "") +
                `stroke-${color} fill-none ${className}`
            }
            onClick={onClick}
        />
    );
};

// export default Icon;

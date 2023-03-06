import React, { FC } from "react";
import { ColorVariantType } from "../../../types/colors";

export interface DividerProps {
    color?: ColorVariantType;
    className?: string;
}

export const Divider: FC<DividerProps> = ({
    color = "gray-200",
    className = "",
}) => {
    return <div className={`h-[1px] bg-${color} ${className}`} />;
};

export default Divider;

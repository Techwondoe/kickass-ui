import React from "react";
import {Badge} from "../Badge/Badge";
import {DirectionMetric} from "../DirectionMetric/DirectionMetric";
import {Typography} from "../Typography/Typography";

/* eslint-disable-next-line */
export interface CardProps {
    title: string;
    value: number;
    status: {
        label: string;
        isComplete: boolean;
    }[];
    directionMetric: {
        description: string;
        data: {
            value: number;
            limit: number;
        };
    };
}
export function Card({ title, value, status, directionMetric }: CardProps) {
    return (
        <div className="border rounded-md shadow-sm max-w-sm">
            <div className="px-6 py-4 space-y-4">
                <Typography variant="p" size="sm" weight="medium">
                    {title}
                </Typography>
                <Typography variant="h1" size="lg" weight="semibold">
                    {value}
                </Typography>
                <div className="flex items-center space-x-2">
                    {status.map(item => (
                        <Badge
                            {...item}
                            color={item.isComplete ? "success" : "error"}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t">
                <Typography variant="p" size="sm" weight="medium">
                    {directionMetric.description}
                </Typography>
                <DirectionMetric
                    value={directionMetric.data.value}
                    limit={directionMetric.data.limit}
                />
            </div>
        </div>
    );
}

export default Card;

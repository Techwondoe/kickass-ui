import React, { FC, useEffect, useMemo, useRef, useState } from "react";

interface SubComponents {
    Button: FC<DropdownButtonProps>;
    Panel: FC<DropdownPanelProps>;
}

export interface DropdownProps {
    children: [
        React.ReactComponentElement<SubComponents["Button"]>,
        React.ReactComponentElement<SubComponents["Panel"]>
    ];
    position?:
        | "auto"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right";
    open?: boolean;
    onChange?: (value: boolean) => void;
    fullWidth?: boolean;
}

export interface DropdownPanelProps {
    children: React.ReactNode;
}

export interface DropdownButtonProps {
    children: React.ReactNode;
}

const emptyValues = {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
};

const emptyRect: DOMRect = {
    ...emptyValues,
    toJSON: () => JSON.stringify(emptyValues),
};

export const Dropdown: FC<DropdownProps> & SubComponents = ({
    children,
    position = "auto",
    open: openProp,
    onChange,
    fullWidth = false,
}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [mouseOverButton, setMouseOverButton] = useState(false);
    const [mouseOverPanel, setMouseOverPanel] = useState(false);
    const [buttonRect, setButtonRect] = useState<DOMRect>(emptyRect);
    const [panelRect, setPanelRect] = useState<DOMRect>(emptyRect);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    let open = openProp ?? internalOpen;
    let setOpen = (o: boolean) => {
        if (openProp === undefined) {
            setInternalOpen(o);
        }
        onChange?.(o);
    };

    useEffect(() => {
        if (buttonRef.current) {
            const onResize = () => {
                if (buttonRef.current) {
                    setButtonRect(buttonRef.current.getBoundingClientRect());
                }
            };
            new ResizeObserver(onResize).observe(buttonRef.current);
        }
        if (panelRef.current) {
            const onResize = () => {
                if (panelRef.current) {
                    setPanelRect(panelRef.current.getBoundingClientRect());
                }
            };
            new ResizeObserver(onResize).observe(panelRef.current);
        }
    }, []);

    let positionValues = useMemo(() => {
        let positionValues = {};
        let vertical = "bottom";
        let horizontal = "right";
        if (position === "auto") {
            const screenWidth = window.screen.availWidth;
            const screenHeight = window.screen.availHeight;
            const { right, left, top, bottom, width, height } = panelRect;
            if (screenWidth < right && left >= width) {
                horizontal = "left";
            }
            if (screenHeight < bottom && top >= height) {
                vertical = "top";
            }
        } else {
            [vertical, horizontal] = position.split("-");
        }
        positionValues = {
            [vertical === "bottom" ? "top" : "bottom"]: buttonRect.height,
            [horizontal === "right" ? "left" : "right"]: 0,
        };
        return positionValues;
    }, [position, buttonRect.height, panelRect]);

    const width = fullWidth ? "w-full" : "w-fit";

    return (
        <div
            className={`${width} h-fit relative`}
            tabIndex={0}
            onBlur={() => {
                if (!mouseOverPanel) {
                    setOpen(false);
                }
            }}
        >
            <div
                ref={buttonRef}
                className={`${width} h-fit`}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setMouseOverButton(true)}
                onMouseLeave={() => setMouseOverButton(false)}
            >
                {children[0]}
            </div>
            <div
                ref={panelRef}
                className={`${width} h-fit absolute z-10 ${
                    open ? "block" : "hidden"
                }`}
                style={{
                    ...positionValues,
                }}
                onMouseEnter={() => setMouseOverPanel(true)}
                onMouseLeave={() => setMouseOverPanel(false)}
                onBlur={() => {
                    if (!mouseOverButton) {
                        setOpen(false);
                    }
                }}
            >
                {children[1]}
            </div>
        </div>
    );
};

Dropdown.Panel = ({ children }) => {
    return <>{children}</>;
};

Dropdown.Button = ({ children }) => {
    return <>{children}</>;
};

export default Dropdown;

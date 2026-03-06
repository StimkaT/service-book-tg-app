"use client";

import {ReactNode} from "react";

interface ButtonIconProps {
    onClick?: () => void;
    icon?: ReactNode;
}

function ButtonIcon({onClick, icon} : ButtonIconProps) {

    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-2 py-2 text-sm font-medium text-slate-700 transition-all hover:text-blue-600 active:scale-95"
        >
            {icon}
        </button>
    );
}

export default ButtonIcon;

"use client";
import type { ReactNode } from 'react';

interface HeaderProps {
    leftContent?: ReactNode;
    centerContent?: ReactNode;
    rightContent?: ReactNode;
}

function Header({ leftContent, centerContent, rightContent }: HeaderProps) {
    return (
        <header className="flex flex-row justify-between items-center p-2 bg-gray-100 min-h-[32px]">
            <div className="flex-1 flex justify-start">
                {leftContent}
            </div>
            <div className="flex-1 flex justify-center">
                {centerContent}
            </div>
            <div className="flex-1 flex justify-end">
                {rightContent}
            </div>
        </header>
    );
}

export default Header;

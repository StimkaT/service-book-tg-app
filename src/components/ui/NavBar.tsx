"use client";
import { GiHomeGarage } from "react-icons/gi";
import { FaWallet, FaPlus } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

interface NavBarProps {
    className?: string;
}

function NavBar({ className }: NavBarProps) {
    const { t } = useTranslation();
    const [addedButton, setAddedButton] = useState(false);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navBtnClass = "flex flex-col items-center justify-center flex-1 text-white/80 hover:text-white transition-colors gap-1";
    const iconSize = 22;
    if (!mounted) {
        return <nav className={`fixed bottom-0 left-0 right-0 bg-cyan-500 h-[72px] ${className}`} />;
    }
    return (
        <nav className={`bg-cyan-500 z-50 ${className}`}>
            <div className="max-w-md mx-auto flex flex-row items-end justify-between px-2 pb-5 pt-3 md:pb-4">

                <button className={navBtnClass} onClick={() => router.push('/main')}>
                    <GiHomeGarage size={iconSize}/>
                    <span className="text-[10px] font-medium">{t('garage')}</span>
                </button>

                <button className={navBtnClass} onClick={() => router.push('/other')}>
                    <FaWallet size={iconSize}/>
                    <span className="text-[10px] font-medium">{t('other')}</span>
                </button>

                <div className="flex-1 flex justify-center -mt-8">
                    <button
                        className="flex items-center justify-center bg-white rounded-full h-14 w-14 text-cyan-500 shadow-lg active:scale-90 transition-transform border-4 border-cyan-500"
                        onClick={() => setAddedButton(!addedButton)}
                    >
                        {addedButton ? <ImCross size={20} /> : <FaPlus size={24} />}
                    </button>
                </div>

                <button className={navBtnClass} onClick={() => router.push('/analytics')}>
                    <SiSimpleanalytics size={iconSize}/>
                    <span className="text-[10px] font-medium">{t('analytics')}</span>
                </button>

                <button className={navBtnClass} onClick={() => router.push('/profile')}>
                    <BsPersonFill size={iconSize}/>
                    <span className="text-[10px] font-medium">{t('profile')}</span>
                </button>

            </div>
        </nav>
    );
}

export default NavBar;

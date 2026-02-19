"use client";
import { GiHomeGarage } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

import {useTranslation} from "react-i18next";
import {useState} from "react";

interface NavBarProps {
    className?: string;
}

function NavBar({ className }: NavBarProps) {
    const { t } = useTranslation();
    const [addedButton, setAddedButton] = useState(false);

    return (
        <nav className={className}>
            <div className="flex flex-row justify-between bg-cyan-500 p-2 pb-4">
                <button className="flex-1 justify-items-center" onClick={() => console.log('click GARAGE')}>
                    <GiHomeGarage size={24}/>
                    <div>{t('garage')}</div>
                </button>
                <button className="flex-1 justify-items-center">
                    <FaWallet size={24}/>
                    <div>{t('other')}</div>
                </button>

                <button
                    className="flex items-center justify-center bg-white rounded-full p-2 text-cyan-500"
                    onClick={() => setAddedButton(!addedButton)}
                >
                    {addedButton ? <ImCross size={32} /> : <FaPlus size={32} />}
                </button>

                <button className="flex-1 justify-items-center">
                    <SiSimpleanalytics size={24}/>
                    <div>{t('analytics')}</div>
                </button>
                <button className="flex-1 justify-items-center">
                    <BsPersonFill size={24}/>
                    <div>{t('profile')}</div>
                </button>
            </div>
        </nav>
    )
}

export default NavBar



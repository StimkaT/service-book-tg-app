"use client";
import {useTranslation} from "react-i18next";

function CarProfile() {
    const { t } = useTranslation();

    return (
        <>
            <div className="flex items-center pl-2 rounded-lg">
                <img
                    src="https://carconfigurator.ferrari.com/rt-assets/data/cars/296gtb/ui/splashpage.jpg"
                    alt="Car avatar"
                    className="w-[80px] h-[80px] rounded-full object-cover flex-none"
                />

                <div className="flex flex-col ml-2">
                    <span className="font-bold leading-tight">Марка  и модель Машины</span>
                    <span className="text-sm opacity-90 uppercase">ID: 123456789</span>
                </div>
            </div>
        </>
    )
}

export default CarProfile



"use client";
import {useTranslation} from "react-i18next";
import CarProfile from "@/components/ui/CarProfile";

function CarSettings() {
    const { t } = useTranslation();

    return (
        <>
            <div className="flex flex-col gap-3">
                <CarProfile></CarProfile>

                <div className="flex flex-row px-4 py-2 justify-between bg-gray-400 rounded-lg">
                    <div>{t('units_of_distance')}</div>
                    <div>км</div>
                </div>

                <div className="flex flex-col bg-gray-400 rounded-lg">
                    <div className="flex flex-row px-4 py-2 justify-between">
                        <div>{t('registration_number')}</div>
                        <div>&&</div>
                    </div>

                    <div className="border-b border-gray-200 w-11/12 mx-auto"></div>

                    <div className="flex flex-row px-4 py-2 justify-between">
                        <div className="uppercase">{t('vin')}</div>
                        <div>vin</div>
                    </div>
                </div>

                <div className="flex flex-row px-4 py-2 justify-between bg-gray-400 rounded-lg">
                    <div>{t('fuel_type')}</div>
                    <div>fuel_type</div>
                </div>

                <div>
                    <div className="uppercase">{t('additionally')}</div>

                    <div className="flex flex-col bg-gray-400 rounded-lg">
                        <div className="flex flex-row px-4 py-2 justify-between">
                            <div>{t('generation')}</div>
                            <div>generation</div>
                        </div>

                        <div className="border-b border-gray-200 w-11/12 mx-auto"></div>

                        <div className="flex flex-row px-4 py-2 justify-between">
                            <div>{t('series')}</div>
                            <div>series</div>
                        </div>

                        <div className="border-b border-gray-200 w-11/12 mx-auto"></div>

                        <div className="flex flex-row px-4 py-2 justify-between">
                            <div>{t('modification')}</div>
                            <div>modification</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CarSettings



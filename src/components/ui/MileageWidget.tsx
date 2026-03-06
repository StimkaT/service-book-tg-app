"use client";
import {useTranslation} from "react-i18next";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { CiEdit } from "react-icons/ci";

interface MileageWidgetProps {
    mileage: number;
    mileageType: string;
}
function MileageWidget({ mileage = 0, mileageType = 'km' }: MileageWidgetProps) {
    const { t } = useTranslation();

    return (
        <>
        <div className="flex flex-row items-center justify-between w-full">
            { mileage } {mileageType}
                <ButtonIcon icon={
                    <CiEdit className="h-5 w-5 text-white"/>
                }
                >
                </ButtonIcon>
            </div>

        </>
    )
}

export default MileageWidget



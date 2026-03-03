"use client";
import {useTranslation} from "react-i18next";
import Selector from "@/components/ui/Selector";
import Header from "@/components/ui/Header";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Input from "./Input";
import {useEffect, useState} from "react";
import ButtonAdd from "@/components/ui/ButtonAdd";
import {Brand, CarModel, FuelType, MileageType} from "@prisma/client";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import YearPicker from "@/components/ui/yearPicker";

interface PropsCreateCarProfile {
    initialVin: string;
    initialCarBrands: Brand[];
    selectedCarBrand: null | number | string;
    initialCarModels: CarModel[];
    selectedCarModel: null | number | string;
    initialCarYears: any[];
    selectedCarYear: null | number | string;
    initialMileageType: MileageType[];
    selectedMileageType: null | number | string;
    initialFuelType: FuelType[];
    selectedFuelType: null | number | string;

    changeCarBrand: any;
}

function CreateCarProfile({
                              initialVin,
                              initialCarBrands = [],
                              selectedCarBrand=null,
                              initialCarModels = [],
                              selectedCarModel=null,
                              initialCarYears = [],
                              selectedCarYear=null,
                              initialMileageType = [],
                              selectedMileageType=null,
                              initialFuelType = [],
                              selectedFuelType=null,
                          }: PropsCreateCarProfile) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleBrandChange = (option: any) => {

        // Создаем копию текущих параметров URL
        console.log(option);
        const params = new URLSearchParams(searchParams.toString());

        console.log('new brand');

        // Устанавливаем новый brandId
        params.set("brandId", option.id.toString());

        console.log('reset model');
        // Сбрасываем модель, так как бренд изменился
        console.log('update model');
        params.delete("modelId");

        // Обновляем URL без перезагрузки всей страницы (Soft Navigation)
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleModelChange = (option: any) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("modelId", option.id.toString());
        router.push(`${pathname}?${params.toString()}`);
    };


    const [mounted, setMounted] = useState(false);
    const { t } = useTranslation();
    const [vin, setVin] = useState(initialVin || "");
    const [brandId, setBrandId] = useState<string | number | null>(selectedCarBrand);
    const [modelId, setModelId] = useState<string | number | null>(selectedCarModel);

    const onClickButt = () => {
        console.log("onClickButt");
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-gray-50" />;
    }
    return (
        <>
            <Header leftContent={<ButtonIcon></ButtonIcon>} centerContent={t('new_transport')} />

            {/*vin*/}
            <Input
                value={vin}
                onChange={(val) => setVin(val)}
                placeholder={t('vin')}
            />
            {/* Селектор бренда */}
            <Selector
                options={initialCarBrands.map(b => ({ id: b.id, label: b.name, value: b.id }))}
                onChange={handleBrandChange}
                selectText={t('select_car_brand')}
                value={selectedCarBrand} // Передаем ID из URL (приходит в пропсах)
            />

            {/* Селектор модели */}
            {initialCarModels.length > 0 && (
                <Selector
                    options={initialCarModels.map(m => ({ id: m.id, label: m.name, value: m.id }))}
                    onChange={handleModelChange} // Нужно создать этот обработчик
                    selectText={t('select_car_model')}
                    value={selectedCarModel} // Если в URL нет modelId, тут будет null и селектор сбросится
                />
            )}


            {/*год*/}
            <YearPicker></YearPicker>

            {/*пробег км/мили*/}
            <Selector options={initialMileageType} onChange={(val) => console.log(val)}  selectText={t('select_mileage_type')}/>

            {/*/!*Тип топлива (тут будет тип+подтип)*!/*/}
            {/*<Selector options={initialFuelType} onChange={(val) => console.log(val)}  selectText={t('select_fuel_type')}/>*/}

            {/*Кнопка добавления активирующаяся только при заполнении обяз полей (марка и модель и топливо)*/}
            <ButtonAdd onClick={onClickButt}></ButtonAdd>




            {/*<Selector options={initialCarModels} onChange={(val) => console.log(val)}  selectText={t('select_car_model')}/>*/}
            {/*<Selector options={initialCarYears} onChange={(val) => console.log(val)}  selectText={t('select_car_year')}/>*/}
        </>
    )
}

export default CreateCarProfile


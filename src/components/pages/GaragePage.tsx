"use client";
import { useTranslation } from 'react-i18next';
import Header from "@/components/ui/Header";
import ButtonAdd from "@/components/ui/ButtonAdd";
import {Car} from "@prisma/client";
import { useState, useEffect } from 'react';

interface Props {
    initialCars: Car[];
}

export default function GaragePage({ initialCars }: Props) {
    const [mounted, setMounted] = useState(false);
    const { t } = useTranslation();

    // Ждем, пока компонент смонтируется в браузере
    useEffect(() => {
        setMounted(true);
    }, []);

    // Пока не смонтировано — возвращаем пустой контейнер или скелетон,
    // который точно совпадет с серверным
    if (!mounted) {
        return <div className="min-h-screen bg-gray-50" />;
    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-black">
            <Header leftContent={'ЛОГО'} rightContent={'LANG'} />
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
                {initialCars.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {initialCars.map((car) => (
                            <div key={car.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="font-medium text-lg">{car.carModel.brand.cyrillicName} {car.carModel.cyrillicName}</div>
                                <div className="text-sm text-gray-400 italic">{car.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                        <img src="https://carconfigurator.ferrari.com/rt-assets/data/cars/296gtb/ui/splashpage.jpg" className="w-32 h-32 rounded-full object-cover" />
                        <div className="text-gray-500">Гараж пока пустует...</div>
                    </div>
                )}
                <div className="mt-10 flex justify-center">
                    <ButtonAdd />
                </div>
            </main>
        </div>
    );
}

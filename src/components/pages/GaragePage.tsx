"use client";
import {useTranslation} from 'react-i18next';
import Header from "@/components/ui/Header";
import ButtonAdd from "@/components/ui/ButtonAdd";

export interface GaragePageProps {
    carList?: ICarList[];
}

export interface ICarList {
    carImg?: string;
    car_brand_name?: string;
    car_model_name?: string;
}

function GaragePage({ carList }: GaragePageProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header leftContent={'ЛОГО'} rightContent={'LANG'} />

            {/* Основной контейнер с ограничением по ширине */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">

                {carList && carList.length > 0 ? (
                    /* Адаптивная сетка: 1 колонка на мобилках, 2 на планшетах, 3+ на десктопе */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {carList.map((car, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                                {/* Пример карточки */}
                                <div className="font-medium text-lg">
                                    {car.car_brand_name} {car.car_model_name}
                                </div>
                                <div className="text-sm text-gray-400 italic">компонент автомобиля</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Состояние пустого гаража: центрируем по вертикали и горизонтали */
                    <div className="h-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
                        <div className="relative">
                            <img
                                src="https://carconfigurator.ferrari.com/rt-assets/data/cars/296gtb/ui/splashpage.jpg"
                                alt="Car avatar"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
                            />
                        </div>
                        <div className="text-gray-500 text-lg md:text-xl max-w-md px-4">
                            Привет, гараж пока пустует, припаркуем твою ласточку?
                        </div>
                    </div>
                )}

                {/* Кнопка добавления: на мобилках можно сделать фиксированной снизу,
                    на десктопе — просто под контентом или в углу */}
                <div className="mt-10 flex justify-center">
                    <ButtonAdd />
                </div>
            </main>
        </div>
    );
}


export default GaragePage

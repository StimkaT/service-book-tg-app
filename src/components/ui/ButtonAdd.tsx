"use client";
import {useTranslation} from "react-i18next";

function ButtonAdd() {
    const { t } = useTranslation();

    return (
        <button
            onClick={() => console.log('click ADD')}
            className="
                /* Базовые стили и мобильная версия (по умолчанию крупнее) */
                text-white bg-cyan-500 rounded-xl px-6 py-3 font-medium text-base

                /* Адаптив: чуть уменьшаем на очень маленьких экранах или меняем под десктоп */
                md:px-8 md:py-2 md:text-sm

                /* Интерактив */
                transition-all duration-200
                hover:bg-cyan-600 hover:shadow-md
                active:scale-95 active:bg-cyan-700
                cursor-pointer

                /* Чтобы кнопка не растягивалась на весь экран, если она в Flex */
                w-fit
            "
        >
            {t('modification')}
        </button>
    );
}


export default ButtonAdd



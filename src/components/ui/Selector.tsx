"use client";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface SelectorOption {
    id: string | number;
    label: string;
    value: any;
}

interface SelectorProps {
    options: SelectorOption[];
    onChange?: (option: SelectorOption) => void;
    selectText: string;
}

function Selector({ options = [], onChange, selectText = '' }: SelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState(""); // Состояние для текста в поиске
    const [selected, setSelected] = useState<SelectorOption | null>(null);

    // 1. Фильтруем список на основе ввода
    const filteredOptions = useMemo(() => {
        if (query === "") return options;
        return options.filter((option) =>
            option.label.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, options]);

    const handleSelect = (option: SelectorOption) => {
        setSelected(option);
        setQuery(option.label); // Записываем название в инпут при выборе
        setIsOpen(false);
        if (onChange) onChange(option);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (!isOpen) setIsOpen(true);

        if (selected && value !== selected.label) {
            setSelected(null);
        }

        // Вызываем onChange при каждом вводе
        if (onChange) {
            onChange({
                id: 'custom', // помечаем как кастомный ввод
                label: value,
                value: value
            });
        }
    };

    return (
        <div className="relative w-full max-w-sm md:w-72">
            <div className="relative">
                {/* 2. Заменяем кнопку на контейнер с инпутом */}
                <input
                    type="text"
                    className="w-full cursor-default rounded-xl bg-white py-3 pl-4 pr-10 text-left shadow-md ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm transition-all"
                    placeholder={selectText}
                    value={query || (selected ? selected.label : "")}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                />
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                    <svg className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd"/>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed inset-x-0 bottom-0 z-50 mt-1 max-h-60 w-full overflow-auto rounded-t-2xl bg-white py-1 text-base shadow-2xl ring-1 ring-black ring-opacity-5 md:absolute md:bottom-auto md:rounded-xl md:text-sm">

                        {filteredOptions.length === 0 ? (
                            <div className="py-3 px-4 text-gray-500 italic">Ничего не найдено</div>
                        ) : (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => handleSelect(option)}
                                    className={`relative cursor-default select-none py-3 px-4 transition-colors ${
                                        selected?.id === option.id
                                            ? 'bg-indigo-100 text-indigo-900'
                                            : 'text-gray-900 hover:bg-indigo-600 hover:text-white'
                                    }`}
                                >
                                    <span className="block truncate">{option.label}</span>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
}


export default Selector;

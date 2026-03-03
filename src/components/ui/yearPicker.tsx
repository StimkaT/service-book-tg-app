"use client";
import { useState, useMemo, useRef } from "react";

interface YearPickerProps {
    value?: string;
    onChange?: (year: string) => void;
    startYear?: number;
    placeholder?: string;
}

function YearPicker({
                        value = "",
                        onChange,
                        startYear = 1950,
                        placeholder = "Выберите год"
                    }: YearPickerProps) {
    const currentYear = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState(value);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const years = useMemo(() => {
        const arr = [];
        for (let y = currentYear; y >= startYear; y--) {
            arr.push(y.toString());
        }
        return arr;
    }, [startYear, currentYear]);

    const filteredYears = useMemo(() => {
        if (!query) return years;
        return years.filter(y => y.includes(query));
    }, [query, years]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, '').slice(0, 4);

        if (val.length === 4 && parseInt(val) > currentYear) {
            val = currentYear.toString();
        }

        setQuery(val);
        if (!isOpen) setIsOpen(true);
        if (onChange) onChange(val);
    };

    const handleSelect = (year: string) => {
        setQuery(year);
        setIsOpen(false);
        if (onChange) onChange(year);
    };

    return (
        <div className="relative w-full max-w-sm md:w-72">
            <div className="relative">
                <input
                    type="text"
                    inputMode="numeric"
                    className="w-full rounded-xl bg-white py-3 pl-4 pr-10 text-left shadow-md ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm transition-all"
                    placeholder={placeholder}
                    value={query}
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
                    <div
                        ref={scrollContainerRef}
                        className="fixed inset-x-0 bottom-0 z-50 mt-1 max-h-60 w-full overflow-auto rounded-t-2xl bg-white py-1 text-base shadow-2xl ring-1 ring-black ring-opacity-5 md:absolute md:bottom-auto md:rounded-xl md:text-sm"
                    >
                        {filteredYears.length === 0 ? (
                            <div className="py-3 px-4 text-gray-500 italic text-center">Год недоступен</div>
                        ) : (
                            filteredYears.map((year) => (
                                <div
                                    key={year}
                                    onClick={() => handleSelect(year)}
                                    className={`relative cursor-pointer select-none py-3 px-4 transition-colors ${
                                        query === year
                                            ? 'bg-indigo-100 text-indigo-900'
                                            : 'text-gray-900 hover:bg-indigo-600 hover:text-white'
                                    }`}
                                >
                                    <span className="block truncate font-medium">{year}</span>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default YearPicker;

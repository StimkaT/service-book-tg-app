"use client";
import { useState, useMemo, useEffect } from "react";

interface DatePickerProps {
    value?: string;
    onChange?: (date: string) => void;
    placeholder?: string;
}

function DatePicker({ value = "", onChange, placeholder = "ДД.ММ.ГГГГ" }: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [viewDate, setViewDate] = useState(new Date()); // Какую страницу календаря видим

    // Синхронизация внешнего значения
    useEffect(() => { setInputValue(value); }, [value]);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const calendarDays = useMemo(() => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const days = [];
        const startDay = (firstDayOfMonth(year, month) + 6) % 7;

        for (let i = 0; i < startDay; i++) days.push(null);
        for (let i = 1; i <= daysInMonth(year, month); i++) days.push(i);

        return days;
    }, [viewDate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        if (onChange) onChange(val);

        const match = val.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
        if (match) {
            const newDate = new Date(`${match[3]}-${match[2]}-${match[1]}`);
            if (!isNaN(newDate.getTime())) setViewDate(newDate);
        }
    };

    const handleDateClick = (day: number) => {
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        const formatted = date.toLocaleDateString('ru-RU');
        setInputValue(formatted);
        setIsOpen(false);
        if (onChange) onChange(formatted);
    };

    const changeMonth = (offset: number) => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
    };

    return (
        <div className="relative w-full max-w-sm md:w-72">
            <div className="relative">
                <input
                    type="text"
                    className="w-full rounded-xl bg-white py-3 pl-4 pr-10 text-left shadow-md ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed inset-x-0 bottom-0 z-50 mt-1 w-full overflow-hidden rounded-t-2xl bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 md:absolute md:bottom-auto md:rounded-xl">

                        {/* Шапка календаря */}
                        <div className="flex items-center justify-between mb-4">
                            <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="font-bold text-gray-700">
                                {viewDate.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}
                            </div>
                            <button onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded-full">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* Сетка календаря */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400 font-medium">
                            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => <div key={d}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => day && handleDateClick(day)}
                                    className={`py-2 text-sm rounded-lg transition-colors ${
                                        day ? 'cursor-pointer hover:bg-indigo-600 hover:text-white text-gray-900' : ''
                                    }`}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DatePicker;

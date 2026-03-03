"use client";
import React, { ChangeEvent } from "react";

// 1. Описываем пропсы компонента
interface InputProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: "text" | "number" | "email" | "password" | "tel";
    name?: string;
    disabled?: boolean;
}

function InputComponent({
                   value,
                   onChange,
                   placeholder = "",
                   type = "text",
                   name,
                   disabled = false
               }: InputProps) {

    // 2. Обработчик изменения
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="relative w-full max-w-sm md:w-72">
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className="
                    w-full cursor-text rounded-xl bg-white
                    py-3 px-4 text-left shadow-md
                    ring-1 ring-inset ring-gray-200
                    placeholder:text-gray-400
                    text-gray-700 font-medium
                    focus:outline-none focus:ring-2 focus:ring-indigo-600
                    sm:text-sm sm:leading-6
                    transition-all duration-200
                    hover:bg-gray-50
                    disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400
                "
            />
        </div>
    );
}

export default InputComponent;

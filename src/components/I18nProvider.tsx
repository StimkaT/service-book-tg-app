"use client";

import React, { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

if (typeof window !== "undefined" && !i18n.isInitialized) {
    i18n
        .use(HttpApi)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'ru',
            debug: false,
            interpolation: { escapeValue: false },
            backend: { loadPath: '/locales/{{lng}}/translation.json' },
            react: { useSuspense: false } // Важно: отключаем зависание
        });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 1. На сервере рендерим только оболочку, чтобы структура совпала
    if (!mounted) {
        return (
            <div style={{ opacity: 0 }}>
                {children}
            </div>
        );
    }

    // 2. На клиенте включаем i18n
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}

"use client";

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Инициализация (как у тебя)
if (typeof window !== "undefined" && !i18n.isInitialized) {
    i18n
        .use(HttpApi)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'ru',
            debug: false,
            interpolation: { escapeValue: false },
            backend: {
                loadPath: '/locales/{{lng}}/translation.json',
            },
        });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

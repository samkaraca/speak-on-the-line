import React, { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { getTranslations, Locale, Translations } from './i18n';

interface TranslationContextType {
    t: Translations;
    locale: Locale;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
    children: ReactNode;
    translations: Translations;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
    children,
    translations,
}) => {
    const router = useRouter();
    const locale = (router.locale || 'tr') as Locale;

    return (
        <TranslationContext.Provider value={{ t: translations, locale }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}; 
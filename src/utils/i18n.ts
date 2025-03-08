import enTranslations from '../translations/en.json';
import trTranslations from '../translations/tr.json';

export const defaultLocale = 'tr';

export type Locale = 'en' | 'tr';

export const locales: Locale[] = ['en', 'tr'];

export type Translations = typeof enTranslations;

export const getTranslations = (locale: Locale): Translations => {
    switch (locale) {
        case 'en':
            return enTranslations;
        case 'tr':
            return trTranslations;
        default:
            return trTranslations;
    }
};

export const getOtherLocale = (locale: Locale): Locale => {
    return locale === 'en' ? 'tr' : 'en';
}; 
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from '@/utils/TranslationContext';
import { getOtherLocale } from '@/utils/i18n';

const LanguageSwitcher: React.FC = () => {
    const router = useRouter();
    const { locale } = useTranslation();
    const otherLocale = getOtherLocale(locale);

    const languageNames = {
        en: 'English',
        tr: 'Türkçe',
    };

    return (
        <Link
            href={router.asPath}
            locale={otherLocale}
            className="flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {languageNames[otherLocale]}
        </Link>
    );
};

export default LanguageSwitcher; 
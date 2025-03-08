import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "@/utils/TranslationContext";
import { getTranslations, Locale } from "@/utils/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      translations: getTranslations((locale || "tr") as Locale),
    },
  };
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, locale } = useTranslation();

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen`}
    >
      <Head>
        <title>Speak on the Line - AI English Practice by Phone</title>
        <meta name="description" content="Improve your English speaking skills by practicing with our AI assistant over the phone. Get 10 minutes free!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.header.title}</h1>
        </div>
        <nav className="flex items-center gap-6">
          <LanguageSwitcher />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            {t.common.getStarted}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            {t.hero.subtitle}
          </p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{t.hero.callUs}</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.hero.phoneNumber}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
            >
              {t.common.tryFree}
            </button>
            <a
              href="#how-it-works"
              className="bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium py-3 px-8 rounded-full text-lg text-center transition-colors"
            >
              {t.common.learnMore}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-4 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3h5m0 0v5m0-5l-6 6M8 21H3m0 0v-5m0 5l6-6M3 8V3m0 0h5m-5 0l6 6m6 6h5m0 0v5m0-5l-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="bg-blue-100 dark:bg-gray-600 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.availability.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.features.availability.description}</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="bg-blue-100 dark:bg-gray-600 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.conversations.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.features.conversations.description}</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="bg-blue-100 dark:bg-gray-600 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.progress.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.features.progress.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.howItWorks.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 dark:bg-gray-700 h-16 w-16 rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">1</span>
              <div className="absolute h-1 w-24 bg-blue-200 dark:bg-gray-600 top-8 left-16 hidden md:block"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.howItWorks.step1.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.howItWorks.step1.description}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 dark:bg-gray-700 h-16 w-16 rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">2</span>
              <div className="absolute h-1 w-24 bg-blue-200 dark:bg-gray-600 top-8 left-16 hidden md:block"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.howItWorks.step2.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.howItWorks.step2.description}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 dark:bg-gray-700 h-16 w-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.howItWorks.step3.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.howItWorks.step3.description}</p>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.trial.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.trial.description}</p>
          <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-lg inline-flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.hero.callUs}</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.hero.phoneNumber}</p>
            </div>
          </div>
          <p className="text-blue-100 dark:text-blue-200">{t.trial.comingSoon}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.faq.title}</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t.faq.questions.cost.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.faq.questions.cost.answer}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t.faq.questions.topics.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.faq.questions.topics.answer}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t.faq.questions.grammar.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.faq.questions.grammar.answer}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t.faq.questions.international.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t.faq.questions.international.answer}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.header.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{t.footer.tagline}</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-600 dark:text-gray-400 mb-2">{t.footer.contact}</p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">{t.footer.email}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Speak on the Line. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{t.modal.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t.modal.description}</p>
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t.hero.phoneNumber}</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors w-full"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

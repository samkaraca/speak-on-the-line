import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { getTranslations, Locale } from "@/utils/i18n";
import { TranslationProvider } from "@/utils/TranslationContext";

interface CustomAppProps extends AppProps {
  pageProps: {
    translations?: ReturnType<typeof getTranslations>;
  } & AppProps["pageProps"];
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const router = useRouter();
  const locale = (router.locale || 'tr') as Locale;
  const translations = pageProps.translations || getTranslations(locale);

  return (
    <TranslationProvider translations={translations}>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

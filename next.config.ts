import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support
    locales: ['en', 'tr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'tr',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when using domain routing)
    // domains: [
    //   {
    //     domain: 'speakontheline.com',
    //     defaultLocale: 'tr',
    //   },
    //   {
    //     domain: 'en.speakontheline.com',
    //     defaultLocale: 'en',
    //   },
    // ],
  },
};

export default nextConfig;

import { GoogleAnalytics } from "@next/third-parties/google";

import CookieConsent from "@components/CookieConsent";
import ThemeProvider from "@components/ThemeProvider";
import TranslationsProvider from "@components/TranslationsProvider";

import gaId from "@config/gaId";

import { Locale } from "@utils/types";

import GlobalStyles from "@assets/styles/global";
import { roboto, specialElite } from "@assets/styles/fonts";

import initTranslations from "@/i18n";

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const i18nNamespaces = ["common", "error", "form"];
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${specialElite.variable}`}
    >
      <body>
        <TranslationsProvider
          locale={locale}
          resources={resources}
          namespaces={i18nNamespaces}
        >
          <ThemeProvider>
            <GlobalStyles />
            {children}
            {/* <CookieConsent /> */}
          </ThemeProvider>
        </TranslationsProvider>
      </body>

      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}

export default RootLayout;

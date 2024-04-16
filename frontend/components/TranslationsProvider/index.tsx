"use client";

import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import { memo, PropsWithChildren } from "react";

import { Locale } from "@utils/types";

import initTranslations from "@/i18n";

interface ITranslationProviderProps {
  locale: Locale;
  namespaces: string[];
  resources: any;
}

const TranslationProvider = memo<PropsWithChildren<ITranslationProviderProps>>(
  function TranslationProvider({ children, locale, namespaces, resources }) {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n, resources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }
);

export default TranslationProvider;

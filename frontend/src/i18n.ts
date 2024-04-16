import { createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

import { Locale } from "@utils/types";

import i18nConfig from "@/i18n.config";

export default async function initTranslations(
  locale: Locale,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: any
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@public/locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    resources,
    lng: locale,
    ns: namespaces,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    t: i18nInstance.t,
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
  };
}

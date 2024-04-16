import { Locale } from "@utils/types";

export const locales = ["en", "fr", "nl"] as Locale[];

const i18nConfig = {
  locales,
  defaultLocale: locales[0],
};

export default i18nConfig;

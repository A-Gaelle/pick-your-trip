"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname, useParams } from "next/navigation";

import i18nConfig, { locales } from "@/i18n.config";

const LanguageSwitcher = () => {
  const router = useRouter();
  const params = useParams();
  const currentPathname = usePathname();
  const { t } = useTranslation("common");

  const [currentLocale, setCurrentLocale] = useState(params.locale);

  const handleChange = (event: { target: HTMLSelectElement }) => {
    const {
      target: { value },
    } = event;
    const { defaultLocale } = i18nConfig;

    setCurrentLocale(value);

    // redirect to the new locale path
    if (currentLocale === defaultLocale) {
      router.push("/" + value + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${value}`));
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      {locales.map((locale, index) => (
        <option
          value={locale}
          key={`locale-${index}`}
          disabled={locale === currentLocale}
        >
          {t(`languageSwitcher.${locale}`)}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;

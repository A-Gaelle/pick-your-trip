"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import Main from "@components/Main";
import Button from "@components/Button";
import Section from "@components/Section";

import pagesPath from "@config/pagesPath";

import { Align, PageName } from "@utils/enum";

function NotFoundPage() {
  const router = useRouter();
  const { t } = useTranslation("error");

  return (
    <>
      {/* generateMetadata doesn't work on Error page */}
      <title>{t(`metadata.title`)}</title>
      <meta name="description" content={t(`metadata.description`)} />

      <Main>
        <Section align={Align.Center}>
          <h1>{t(`404.title`)}</h1>
          <h2>{t(`404.text`)}</h2>
          <Button onClick={() => router.push(pagesPath[PageName.Home])}>
            {t(`404.actions.goToHome.label`)}
          </Button>
        </Section>
      </Main>
    </>
  );
}

export default NotFoundPage;

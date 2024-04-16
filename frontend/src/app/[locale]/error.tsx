"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Main from "@components/Main";
import Button from "@components/Button";
import Section from "@components/Section";

import { Align } from "@utils/enum";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const { t } = useTranslation("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      {/* generateMetadata() doesn't work on Error page */}
      <title>{t(`metadata.title`)}</title>
      <meta name="description" content={t(`metadata.description`)} />

      <Main>
        <Section align={Align.Center}>
          <h1>{t(`default.title`)}</h1>
          <h2>{t(`default.text`)}</h2>
          <Button onClick={() => reset()}>
            {t(`default.actions.tryAgain.label`)}
          </Button>
        </Section>
      </Main>
    </>
  );
}

export default ErrorPage;

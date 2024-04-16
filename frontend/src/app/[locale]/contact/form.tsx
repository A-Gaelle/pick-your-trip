"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";

import Form from "@components/Form";
import Button from "@components/Button";
import FormRow from "@components/FormRow";

import { Locale } from "@utils/types";
import { PageName } from "@utils/enum";

import pagesPath from "@config/pagesPath";

interface IContactForm {
  locale: Locale;
}

const ContactForm = ({ locale }: IContactForm) => {
  const { t } = useTranslation("common");
  const searchParams = useSearchParams();
  const pageInterest = searchParams.get("from") || "";

  const [isValid, setValid] = useState(false);
  const [isReset, setReset] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setReset(false);
    setError(false);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok)
        throw new Error("Failed to submit the data. Please try again.");

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error: any) {
      setError(true);
      console.error(error);
    } finally {
      setValid(false);
      setIsLoading(false);
      setReset(true);
    }
  }

  return (
    <Form setValid={setValid} isReset={isReset} onSubmit={onSubmit}>
      <FormRow>
        <input
          type="hidden"
          id="pageInterest"
          name="pageInterest"
          value={pageInterest}
        />
        <input type="hidden" id="locale" name="locale" value={locale} />
      </FormRow>
      <FormRow>
        <label htmlFor="lastname">
          <input
            required
            type="text"
            id="lastname"
            name="lastname"
            placeholder={t(`contactForm.lastname.placeholder`)}
          />
        </label>

        <label htmlFor="firstname">
          <input
            required
            type="text"
            id="firstname"
            name="firstname"
            placeholder={t(`contactForm.firstname.placeholder`)}
          />
        </label>
      </FormRow>

      <FormRow>
        <label htmlFor="email">
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder={t(`contactForm.email.placeholder`)}
          />
        </label>
      </FormRow>

      <FormRow>
        <label htmlFor="legal">
          <input required id="legal" type="checkbox" name="legal" />
          <span
            dangerouslySetInnerHTML={{
              __html: t(`contactForm.legal.label`, {
                link: pagesPath[PageName.PrivacyPolicy],
              }),
            }}
          />
        </label>
      </FormRow>

      <Button type="submit" isDisabled={!isValid}>
        {isLoading
          ? t(`contactForm.loading`)
          : t(`contactForm.actions.submit.label`)}
      </Button>

      {isError && <div>{t(`contactForm.error`)}</div>}
    </Form>
  );
};

export default ContactForm;

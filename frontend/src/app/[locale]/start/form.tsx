"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Form from "@components/Form";
import Button from "@components/Button";
import FormRow from "@components/FormRow";

import { Locale } from "@utils/types";
import FormRange from "@components/FormRange";
import FormRadio from "@components/FormRadio";
import FormCheckbox from "@components/FormCheckbox";

type QuestionType = "text" | "select";

interface Question {
  id: string;
  label: string;
  type: QuestionType;
  options?: string[];
}

interface IContactForm {
  locale: Locale;
}

const ContactForm = ({ locale }: IContactForm) => {
  const { t } = useTranslation("form");

  const [isRowVisible, setRowVisible] = useState(1);
  const totalQuestion = (t("questions", { returnObjects: true }) as []).length;

  const [isValid, setValid] = useState(false);
  const [isReset, setReset] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({});

  function onNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    let values;
    const datas = [...new FormData(event.currentTarget).entries()];

    if (datas.length > 1) {
      const test: string[] = [];
      datas.map((data) => test.push(data[1]));

      values = { [datas[0][0].split("-")[0]]: test };
    } else {
      values = Object.fromEntries(datas);
    }

    setFormData({ ...formData, ...values });

    setValid(false);
    setIsLoading(false);
    setRowVisible(isRowVisible + 1);

    console.log(formData, values);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setReset(false);
    setError(false);

    console.log("formData", formData);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
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
    <Form
      setValid={setValid}
      isReset={isReset}
      onSubmit={isRowVisible !== totalQuestion ? onNext : onSubmit}
      id="form"
    >
      {(t("questions", { returnObjects: true }) as []).map(
        (question: Question, index: number) => {
          const { id, label, type } = question;

          if (type === "text") {
            return (
              isRowVisible === index + 1 && (
                <FormRow key={`navItem-${index}`}>
                  <label htmlFor="firstname">
                    <input
                      id={id}
                      required
                      type="text"
                      name="firstname"
                      placeholder={t(`contactForm.firstname.placeholder`)}
                    />
                  </label>
                </FormRow>
              )
            );
          }
          if (type === "select") {
            const { options } = question;

            return (
              isRowVisible === index + 1 && (
                <FormRow key={`navItem-${index}`}>
                  <label>
                    <span>{label}</span>
                    <select name={id}>
                      <option value="DEFAULT" disabled>
                        Choose a value ...
                      </option>
                      {options?.map((option, index) => {
                        return (
                          <option key={`navItem-${index}`} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </FormRow>
              )
            );
          }

          if (type === "radio" || type === "checkbox") {
            const { options } = question;
            return (
              isRowVisible === index + 1 && (
                <FormRow key={`navItem-${index}`}>
                  {type === "radio" ? (
                    <FormRadio options={options} label={label} id={id} />
                  ) : (
                    <FormCheckbox options={options} label={label} id={id} />
                  )}
                </FormRow>
              )
            );
          }

          if (type === "range") {
            const { options, optionsMin, optionsMax } = question;
            return (
              isRowVisible === index + 1 && (
                <FormRange
                  id={id}
                  label={label}
                  key={`navItem-${index}`}
                  min={optionsMin}
                  max={optionsMax}
                  options={options}
                />
              )
            );
          }
        }
      )}

      <Button type={"submit"} isDisabled={!isValid}>
        {isLoading ? t(`contactForm.loading`) : "next"}
      </Button>

      {isError && <div>{t(`contactForm.error`)}</div>}
    </Form>
  );
};

export default ContactForm;

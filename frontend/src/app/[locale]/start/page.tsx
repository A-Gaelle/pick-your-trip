import { cookies } from "next/headers";

import Main from "@components/Main";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Loading from "@components/Loading";
import Section from "@components/Section";

import { Locale } from "@utils/types";
import { Align, PageName } from "@utils/enum";

import getConfig from "@utils/api/getConfig";
import getMetadata from "@utils/api/getMetadata";

import { locales } from "@/i18n.config";

import Form from "./form";

const pageName = PageName.Contact;

interface IServicesPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params: { locale },
}: IServicesPageProps) {
  if (!locales.includes(locale)) return <Loading />;
  return await getMetadata(locale, pageName);
}

export default async function ContactPage({
  params: { locale },
}: IServicesPageProps) {
  const cookieStore = cookies();
  const name = cookieStore.get("name");

  if (!locales.includes(locale)) return <Loading />;

  const {
    data: {
      attributes: { nav, socialLinks },
    },
  } = await getConfig(locale);

  return (
    <>
      <Header externalLinksFromApi={nav} />
      <Main>
        <Section align={Align.Center}>
          <h1>Hi, {name?.value}</h1>
          <h2>A little form to know more about your needed</h2>
        </Section>

        <Section align={Align.Center}>
          <Form locale={locale} />
        </Section>
      </Main>
      <Footer socialLinksFromApi={socialLinks} />
    </>
  );
}

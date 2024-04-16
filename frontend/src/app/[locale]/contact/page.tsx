import Main from "@components/Main";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Loading from "@components/Loading";
import Section from "@components/Section";

import { Locale } from "@utils/types";
import { Align, PageName } from "@utils/enum";

import getData from "@utils/api/getData";
import getConfig from "@utils/api/getConfig";
import getMetadata from "@utils/api/getMetadata";

import { locales } from "@/i18n.config";

import ContactForm from "./form";

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
  if (!locales.includes(locale)) return <Loading />;

  const {
    data: {
      attributes: { nav, socialLinks },
    },
  } = await getConfig(locale);

  const {
    data: {
      attributes: { heroSection },
    },
  } = await getData(locale, pageName);

  return (
    <>
      <Header externalLinksFromApi={nav} />
      <Main>
        <Section align={Align.Center}>
          <h1>{heroSection.title}</h1>
          <h2>{heroSection.subtitle}</h2>
        </Section>

        <Section align={Align.Center}>
          <ContactForm locale={locale} />
        </Section>
      </Main>
      <Footer socialLinksFromApi={socialLinks} />
    </>
  );
}

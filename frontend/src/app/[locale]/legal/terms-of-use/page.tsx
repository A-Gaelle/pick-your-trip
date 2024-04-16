import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Main from "@components/Main";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Loading from "@components/Loading";

import { Locale } from "@utils/types";
import { Align, PageName } from "@utils/enum";
import camelCaseToDash from "@utils/camelCaseToDash";

import getData from "@utils/api/getData";
import getConfig from "@utils/api/getConfig";
import getMetadata from "@utils/api/getMetadata";

import { locales } from "@/i18n.config";

const pageName = camelCaseToDash(PageName.TermsOfUse);

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

export default async function TermsOfUsePage({
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
      attributes: { heroSection, content },
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
        <Section>
          <BlocksRenderer content={content} />
        </Section>
      </Main>
      <Footer socialLinksFromApi={socialLinks} />
    </>
  );
}

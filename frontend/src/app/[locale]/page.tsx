import Main from "@components/Main";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Loading from "@components/Loading";

import { Locale } from "@utils/types";
import { Align, PageName } from "@utils/enum";

import getData from "@utils/api/getData";
import getConfig from "@utils/api/getConfig";
import getMetadata from "@utils/api/getMetadata";

import { locales } from "@/i18n.config";
import StartButton from "@components/StartButton";
import TextAnimation from "@components/TextAnimation";

const pageName = PageName.Home;

interface IHomePageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ params: { locale } }: IHomePageProps) {
  if (!locales.includes(locale)) return <Loading />;
  return await getMetadata(locale, pageName);
}

export default async function HomePage({ params: { locale } }: IHomePageProps) {
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
          <h2>
            <TextAnimation
              text={[
                "Barcelona",
                "London",
                "Rome",
                "Bali",
                "Tokyo",
                "Dubbai",
                "Maldives",
                "New York City",
                "Cape Town",
                "Dominican Republic",
                "Cape Town",
                "Cancun",
                "Paris",
                "Marrakech",
                "Crete",
              ]}
            />
          </h2>
          <h1>Choose your next trip !</h1>
          <StartButton />
        </Section>
      </Main>
      <Footer socialLinksFromApi={socialLinks} />
    </>
  );
}

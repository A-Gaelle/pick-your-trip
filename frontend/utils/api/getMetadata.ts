import { Locale } from "@utils/types";

import getData from "./getData";

async function getMetadata(locale: Locale, pageName: string) {
  const {
    data: {
      attributes: {
        seo: { metaTitle: title, metaDescription: description, keywords },
      },
    },
  } = await getData(locale, pageName);

  return {
    title,
    description,
    keywords,
  };
}

export default getMetadata;

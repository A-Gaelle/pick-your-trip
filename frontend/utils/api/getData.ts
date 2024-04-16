import { Locale } from "@utils/types";

import baseUrl from "@config/api";

async function getData(locale: Locale, pageName: string) {
  const res = await fetch(
    `${baseUrl}/api/${pageName}-page?locale=${locale}&populate=*`,
    {
      headers: { Authorization: `bearer ${process.env.API_TOKEN}` },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default getData;

import { Locale } from "@utils/types";

import baseUrl from "@config/api";

async function getConfig(locale: Locale) {
  const res = await fetch(
    `${baseUrl}/api/configuration?locale=${locale}&populate=*`,
    {
      headers: { Authorization: `bearer ${process.env.API_TOKEN}` },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default getConfig;

import { NowResponse } from "@now/node";

import {
  getTotalConfirmed,
  getTotalRecovered,
  getTotalDeaths,
  getLastUpdate
} from "../util/api";

export default async (_, response: NowResponse) => {
  const [confirmed, recovered, deaths, lastUpdate] = await Promise.all([
    getTotalConfirmed(),
    getTotalRecovered(),
    getTotalDeaths(),
    getLastUpdate()
  ]);

  response.json({
    confirmed: {
      value: confirmed,
      detail: "https://covid19.zakaria.tech/api/confirmed"
    },
    recovered: {
      value: recovered,
      detail: "https://covid19.zakaria.tech/api/recovered"
    },
    deaths: {
      value: deaths,
      detail: "https://covid19.zakaria.tech/api/deaths"
    },
    dailySummary: "https://covid19.zakaria.tech/api/daily",
    dailyTimeSeries: {
      pattern: "https://covid19.zakaria.tech/api/daily/[dateString]",
      example: "https://covid19.zakaria.tech/api/daily/2-14-2020"
    },
    image: "https://covid19.zakaria.tech/api/og",
    countries: "https://covid19.zakaria.tech/api/countries",
    countryDetail: {
      pattern: "https://covid19.zakaria.tech/api/countries/[country]",
      example: "https://covid19.mathdro.id/api/countries/Morocco"
    },
    lastUpdate
  });
};

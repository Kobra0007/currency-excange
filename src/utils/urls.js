export const API = {
  currencies: {
    getAll: () => `https://api.frankfurter.app/currencies`,
    getLatestExchangeRate: ({ fromId, toId }) =>
      `https://api.frankfurter.app/latest?from=${fromId}&to=${toId}`,
    getHistoricalExchangeRate: ({ date, fromId, toId }) =>
      `https://api.frankfurter.app/${date}?from=${fromId}&to=${toId}`,
  },
};

export const NAV = {
  empty: () => "/",
  currency: (currencyId) => `/${currencyId}`,
};

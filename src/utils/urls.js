export const API = {
  currencies: {
    getAll: () => `https://api.frankfurter.app/currencies`,
    getLatestExchangeRate: ({ fromId, toId }) =>
      `https://api.frankfurter.app/latest?from=${fromId}&to=${toId}`,
    getHistoricalExchangeRate: ({ dateFrom, dateTo = '', fromId, toId }) =>
      `https://api.frankfurter.app/${dateFrom}..${dateTo}?from=${fromId}&to=${toId}`,
    getConversionRate: ({ amount, fromId, toId }) =>
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromId}&to=${toId}`,
  },
};

export const NAV = {
  empty: () => '/',
  currency: (currencyId) => `/${currencyId}`,
};

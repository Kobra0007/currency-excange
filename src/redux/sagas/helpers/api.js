import { API } from '../../../utils/urls';

const makeApiCall = async (url, params = {}) => {
  const request = new Request(url, {
    ...params,
    headers: {
      'Content-Type': 'application/json',
      ...params.headers,
    },
  });
  let data;

  try {
    const result = await fetch(request);

    if (result.status >= 500) {
      throw new Error(`${result.status} ${result.statusText}`);
    }

    if (result.status !== 204) {
      data = await result.json();
    } else {
      data = null; // No content, set data to null
    }

    if (
      result.status !== 200 &&
      result.status !== 201 &&
      result.status !== 204
    ) {
      throw data;
    }

    return data;
  } catch (error) {
    console.error('Error making API call:', error);
    throw error;
  }
};

export const getAllCurrencies = async () =>
  await makeApiCall(`${API.currencies.getAll()}`);

export const getLatestExchangeRate = async ({ fromId, toId }) =>
  await makeApiCall(
    `${API.currencies.getLatestExchangeRate({ fromId, toId })}`,
  );

export const getHistoricalExchangeRate = async ({
  dateFrom,
  dateTo,
  fromId = 'USD',
  toId,
}) =>
  await makeApiCall(
    `${API.currencies.getHistoricalExchangeRate({
      dateFrom,
      dateTo,
      fromId,
      toId,
    })}`,
  );

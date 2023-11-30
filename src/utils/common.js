export const customRangeAgoISODate = (days = 30) =>
  new Date(Date.now() - Number(days) * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

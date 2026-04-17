import type { RealTimeStockPriceResponse } from '#shared/models/stock';

export default defineEventHandler(async (event) => {
  const { symbol } = getQuery(event);
  const BASE_URL = 'https://cafef.vn/du-lieu/Ajax/PageNew/RealtimePricesHeader.ashx';

  if (!symbol) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Symbol is required'
    });
  }

  console.log(symbol);
  try {
    const res = await $fetch<string>(`${BASE_URL}?symbols=${encodeURIComponent(symbol.toString())}`);
    return typeof res === 'string' ? JSON.parse(res) as RealTimeStockPriceResponse : res;
  } catch (error) {
    console.error('Error fetching real-time price:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch real-time price'
    });
  }
});
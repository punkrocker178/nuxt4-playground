import type { RealTimeStockPriceResponse } from '#shared/models/stock';

export function useStocks() {
  async function fetchStockPrice(symbol: string): Promise<RealTimeStockPriceResponse> {
    try {
      return await $fetch(`/api/stocks/realTimePrice?symbol=${encodeURIComponent(symbol)}`);
    } catch (error) {
      console.error('Error fetching stock price:', error);
      throw new Error('Failed to fetch stock price');
    }
  }

  return {
    fetchStockPrice
  };
}
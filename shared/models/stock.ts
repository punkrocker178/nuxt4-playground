export interface RealTimeStockPriceQueryParams {
  symbol: string;
}

export interface RealTimeStockPriceResponse {
  [key: string]: Stock;
}

export interface Stock {
  Symbol: string;
  LastTradeDate: string;
  Price: number;
  RefPrice: number;
  OpenPrice: number;
  FloorPrice: number;
  CeilingPrice: number;
  Volume: number;
}
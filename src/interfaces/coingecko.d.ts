export interface IMarketListResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply?: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

export interface ICoinHistoryResponse {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export interface IFormattedData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: string;
  price_change_percentage_24h: number;
  market_cap: string;
  total_volume: string;
  total_supply: string;
  high_24h: string;
  low_24h: string;
  ath: string;
}

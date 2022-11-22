import { useSocket } from "./useSocket";
import { IMiniTicker } from "../interfaces/binance";

export const coins = ["BTC", "ETH", "BNB", "ADA", "SOL", "DOT", "LINK", "MATIC", "XRP"];

export const useRealTimePrice = () => {
  const baseURL = "wss://stream.binance.com:9443/ws/";
  const streams = coins.map((coin) => `${coin.toLowerCase()}usdt@miniTicker`).join("/");
  const wsURL = baseURL + streams;
  const { lastMessage, isConnected } = useSocket(wsURL);
  if (isConnected && lastMessage !== null) {
    const { s, c } = lastMessage as IMiniTicker;
    return { symbol: s.slice(0, -4), price: parseFloat(c) };
  }
  return { price: 0, symbol: "" };
};

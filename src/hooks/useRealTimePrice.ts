import { useSocket } from "./useSocket";

interface IMiniTicker {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  c: string; // Close price
  o: string; // Open price
  h: string; // High price
  l: string; // Low price
  v: string; // Total traded base asset volume
  q: string; // Total traded quote asset volume
}

export const useRealTimePrice = () => {
  const coins = ["btc", "eth", "bnb", "ada", "dot", "link", "link", "xrp", "sol"];
  const wsURL = "wss://stream.binance.com:9443/ws/" + coins.join("usdt@miniTicker/");
  const { lastMessage, isConnected } = useSocket(wsURL);
  if (isConnected && lastMessage !== null) {
    const { s, c } = lastMessage as IMiniTicker;
    return { symbol: s.slice(0, -4), price: parseFloat(c) };
  }
  return { price: 0, symbol: "" };
};

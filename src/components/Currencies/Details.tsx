import React, { useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { IMiniTicker } from "../../interfaces/binance";
import { IFormattedData } from "../../interfaces/coingecko";
import { formatNumber } from "../../utils/format";
import { NotWatching, Watching } from "./Watching";

interface IDetailsProps {
  coin: IFormattedData;
}

const Details = ({ coin }: IDetailsProps) => {
  const { price, high, low, isWatching } = useLatestCryptoData(coin);

  return (
    <div className="flex flex-col font-semibold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img className="w-16" src={coin.image} alt={coin.name} />
          <span className="leading-none text-2xl font-bold">
            {coin.name}
            <small className="text-zinc-400"> ({coin.symbol})</small>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>All Time High:</div>
          <div className="text-indigo-300 text-lg">${coin.ath}</div>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-2">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row gap-1 text-xl">
            {isWatching ? <Watching /> : <NotWatching />}
            <span>Current Price:</span>
            <span className="text-indigo-300">${price}</span>
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="text-green-400 text-opacity-60 text-sm font-thin">High: ${high}</div>
            <div className="text-red-400 text-opacity-60 text-sm font-thin">Low: ${low}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full text-center border rounded border-zinc-600 mt-1">
          <div>Market Cap:</div>
          <div>Volume:</div>
          <div>Total Supply:</div>
          <div className="text-indigo-300">${coin.market_cap}</div>
          <div className="text-indigo-300">${coin.total_volume}</div>
          <div className="text-indigo-300">{coin.total_supply}</div>
        </div>
      </div>
    </div>
  );
};

const useLatestCryptoData = (coin: IFormattedData) => {
  const symbol = coin.symbol.toLowerCase();
  const { lastMessage } = useSocket(`wss://stream.binance.com:9443/ws/${symbol}usdt@miniTicker`);

  const formatter = (num: number) => formatNumber(num, false, 6);

  const [price, setPrice] = React.useState(coin.current_price);
  const [high, setHigh] = React.useState(coin.high_24h);
  const [low, setLow] = React.useState(coin.low_24h);
  const [isWatching, setIsWatching] = React.useState(false);

  useEffect(() => {
    if (lastMessage) {
      setIsWatching(true);
      const response = lastMessage as IMiniTicker;
      setPrice(formatter(Number(response.c)));
      setHigh(formatter(Number(response.h)));
      setLow(formatter(Number(response.l)));
    }
  }, [lastMessage]);

  return { price, high, low, isWatching };
};

export default Details;

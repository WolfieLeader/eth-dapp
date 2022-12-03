import React from "react";
import { IFormattedData } from "../../interfaces/coingecko";

interface IDetailsProps {
  coin: IFormattedData;
}

const Details = ({ coin }: IDetailsProps) => {
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
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="flex flex-row gap-1 text-xl">
            <span>Current Price:</span>
            <span className="text-indigo-300">${coin.current_price}</span>
            <small
              className={`font-thin ${
                coin.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : coin.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-zinc-500"
              }`}>
              ({coin.price_change_percentage_24h}%)
            </small>
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="text-green-400 text-opacity-60 text-sm font-thin">High: ${coin.high_24h}</div>
            <div className="text-red-400 text-opacity-60 text-sm font-thin">Low: ${coin.low_24h}</div>
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

const useLatestCryptoData = () => {
  return "";
};

export default Details;

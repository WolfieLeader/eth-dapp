import React from "react";
import { Link } from "react-router-dom";
import { IFormattedData } from "../../interfaces/coingecko";

interface ICoinProps {
  coin: IFormattedData;
}

const Coin = ({ coin }: ICoinProps) => {
  return (
    <Link
      to={`/currencies/?currency=${coin.id}`}
      className="h-16 items-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-b border-zinc-600 cursor-pointer bg-zinc-900 hover:bg-zinc-800">
      <div className="flex items-center justify-start pl-3 gap-1 text-left">
        <img className="w-6" src={coin.image} alt={coin.name} />
        <span className="leading-none">
          {coin.name}
          <small className="text-zinc-400"> ({coin.symbol})</small>
        </span>
      </div>
      <div>{coin.current_price}</div>
      <div className="hidden sm:block">{coin.market_cap}</div>
      <div className="hidden md:block">{coin.total_volume}</div>
      <div className="hidden md:block">{coin.total_supply}</div>
      <div className="flex justify-center items-center">
        <div
          className={`w-20 h-fit p-1 rounded ${
            coin.price_change_percentage_24h > 0
              ? "text-green-500 bg-green-300 bg-opacity-10"
              : coin.price_change_percentage_24h < 0
              ? "text-red-500 bg-red-500 bg-opacity-10"
              : "text-zinc-500 bg-zinc-300 bg-opacity-10"
          }`}>
          {coin.price_change_percentage_24h}%
        </div>
      </div>
    </Link>
  );
};
export default Coin;

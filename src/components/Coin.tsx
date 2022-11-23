import React from "react";
import { ICoinMarketsResponse } from "../interfaces/coingecko";
import { currencyFormat } from "../utils/currencyFormat";

interface ICoinProps {
  coin: ICoinMarketsResponse;
}

const Coin = ({ coin }: ICoinProps) => {
  return (
    <div className="grid grid-cols-3 font-light p-2 rounded cursor-pointer border-gray-200 border mt-2 hover:bg-gray-700">
      <div className="flex items-center gap-1 w-full">
        <img className="w-10" src={coin.image} alt={coin.name} />
        <p>{coin.name}</p>
        <span className="text-xs text-neutral-500">({coin.symbol.toUpperCase()})</span>
      </div>
      <span
        className={`w-full text-center ${coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
        {currencyFormat(coin.current_price)}
      </span>
      <div className="hidden sm:block">
        <p className="font-semibold">Market Cap</p>
        <span>{currencyFormat(coin.market_cap)}</span>
      </div>
    </div>
  );
};
export default Coin;

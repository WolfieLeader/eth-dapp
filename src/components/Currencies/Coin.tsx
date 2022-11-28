import React from "react";
import { compactBigNumber } from "../../utils/format";
import { ICoinMarketsResponse } from "../../interfaces/coingecko";

interface ICoinProps {
  coin: ICoinMarketsResponse;
  popCryptoInfo: (coinName: string) => void;
}

const Coin = ({ coin, popCryptoInfo }: ICoinProps) => {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    market_cap,
    total_volume,
    total_supply,
    price_change_percentage_24h,
  } = coin;
  return (
    <div
      className="h-16 items-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-b border-zinc-600 cursor-pointer bg-zinc-900 hover:bg-zinc-800"
      onClick={() => popCryptoInfo(id)}>
      <div className="flex items-center justify-start pl-3 gap-1 text-left">
        <img className="w-6" src={image} alt={name} />
        <span className="leading-none">
          {name}
          <small className="text-zinc-400"> ({symbol.toUpperCase()})</small>
        </span>
      </div>
      <div>{current_price}</div>
      <div className="hidden sm:block">{compactBigNumber(market_cap)}</div>
      <div className="hidden md:block">{compactBigNumber(total_volume)}</div>
      <div className="hidden md:block">{compactBigNumber(total_supply)}</div>
      <div className="flex justify-center items-center">
        <div
          className={`w-20 h-fit p-1 rounded ${
            price_change_percentage_24h > 0
              ? "text-green-500 bg-green-300 bg-opacity-10"
              : price_change_percentage_24h < 0
              ? "text-red-500 bg-red-500 bg-opacity-10"
              : "text-zinc-500 bg-zinc-300 bg-opacity-10"
          }`}>
          {price_change_percentage_24h.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};
export default Coin;

import React from "react";
import Coin from "./Coin";
import { IFormattedData } from "../../interfaces/coingecko";

interface IMarketListProps {
  marketListResponse: IFormattedData[];
}

const MarketList = ({ marketListResponse }: IMarketListProps) => {
  return (
    <section className="container mt-4 bg-zinc-900 w-full border-2 border-zinc-600 rounded-md text-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 py-2 border-b border-zinc-600">
        <div>Name</div>
        <div>Price</div>
        <div className="hidden sm:block">Market Cap</div>
        <div className="hidden md:block">Volume</div>
        <div className="hidden md:block">Total Supply</div>
        <div>24h %</div>
      </div>
      {(marketListResponse as IFormattedData[]).map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </section>
  );
};

export default MarketList;

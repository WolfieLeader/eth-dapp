import React from "react";
import useAxios from "../../hooks/useAxios";
import Coin from "./Coin";
import { IMarketListResponse } from "../../interfaces/coingecko";

interface IMarketListProps {
  popCryptoInfo: (coinName: string) => void;
}

const MarketList = ({ popCryptoInfo }: IMarketListProps) => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  React.useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className="container w-full overflow-hidden">
      <h1 className="text-indigo-400 text-2xl font-bold tracking-tight sm:text-3xl mt-6">
        Cryptocurrency Prices By Market Cap:
      </h1>
      <section className="container mt-4 bg-zinc-900 w-full border-2 border-zinc-600 rounded-md text-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 py-2 border-b border-zinc-600">
          <div>Name</div>
          <div>Price</div>
          <div className="hidden sm:block">Market Cap</div>
          <div className="hidden md:block">Volume</div>
          <div className="hidden md:block">Total Supply</div>
          <div>24h %</div>
        </div>
        {response &&
          (response as IMarketListResponse[]).map((coin) => (
            <Coin key={coin.id} coin={coin} popCryptoInfo={popCryptoInfo} />
          ))}
      </section>
    </div>
  );
};

export default MarketList;

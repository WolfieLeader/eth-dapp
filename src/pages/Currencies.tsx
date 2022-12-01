import React from "react";
import { useSearchParams } from "react-router-dom";
import PopUp from "../components/Currencies/PopUp";
import MarketList from "../components/Currencies/MarketList";
import useAxios from "../hooks/useAxios";
import { IMarketListResponse } from "../interfaces/coingecko";

const Currencies = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const [searchParams, setSearchParams] = useSearchParams({ currency: "" });
  const id = searchParams.get("currency");

  return (
    <div>
      <div className="container w-full overflow-hidden">
        <h1 className="text-indigo-400 text-2xl font-bold tracking-tight sm:text-3xl mt-6">
          Cryptocurrency Prices By Market Cap:
        </h1>
        {response && <MarketList marketListResponse={response as IMarketListResponse[]} />}
      </div>
      {response && id && (
        <div className="fixed inset-0 z-30 bg-zinc-900 bg-opacity-70 h-full w-full flex justify-center items-center">
          <PopUp
            id={id}
            closeCryptoInfo={() => setSearchParams({})}
            marketListResponse={response as IMarketListResponse[]}
          />
        </div>
      )}
    </div>
  );
};

export default Currencies;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PopUp from "../components/Currencies/PopUp";
import MarketList from "../components/Currencies/MarketList";
import useAxios from "../hooks/useAxios";
import { IMarketListResponse, IFormattedData } from "../interfaces/coingecko";
import { formatNumber } from "../utils/format";

const Currencies = () => {
  const { formattedData } = useFormattedData();
  const [searchParams, setSearchParams] = useSearchParams({ currency: "" });
  const id = searchParams.get("currency");

  return (
    <div>
      <div className="container w-full overflow-hidden">
        <h1 className="text-indigo-400 text-2xl font-bold tracking-tight sm:text-3xl mt-6">
          Cryptocurrency Prices By Market Cap:
        </h1>
        {formattedData && <MarketList marketListResponse={formattedData} />}
      </div>
      {formattedData && id && (
        <div className="fixed inset-0 z-30 bg-zinc-900 bg-opacity-70 h-full w-full flex justify-center items-center">
          <PopUp id={id} closeCryptoInfo={() => setSearchParams({})} marketListResponse={formattedData} />
        </div>
      )}
    </div>
  );
};

const useFormattedData = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const [formattedData, setFormattedData] = useState<IFormattedData[]>();

  useEffect(() => {
    if (response) {
      const formattedDataArray = (response as IMarketListResponse[]).map((coin) => {
        return {
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          image: coin.image,
          current_price: formatNumber(coin.current_price, false, 6),
          price_change_percentage_24h: Number(coin.price_change_percentage_24h.toFixed(2)),
          market_cap: formatNumber(coin.market_cap, true),
          total_volume: formatNumber(coin.total_volume, true),
          total_supply: formatNumber(coin.total_supply, true),
          high_24h: formatNumber(coin.high_24h, false, 6),
          low_24h: formatNumber(coin.low_24h, false, 6),
          ath: formatNumber(coin.ath, false, 6),
        };
      });
      setFormattedData(formattedDataArray);
    }
  }, [response]);

  return { formattedData };
};

export default Currencies;

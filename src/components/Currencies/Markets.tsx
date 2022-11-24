import React, { useCallback } from "react";
import useAxios from "../../hooks/useAxios";
import Coin from "./Coin";
import { ICoinMarketsResponse } from "../../interfaces/coingecko";

interface IMarketsProps {
  setSearchParams: (searchParams: URLSearchParams) => void;
}

const Markets = ({ setSearchParams }: IMarketsProps) => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const handleClick = useCallback(
    (coin: ICoinMarketsResponse) => {
      setSearchParams(new URLSearchParams({ currency: coin.id }));
    },
    [setSearchParams]
  );

  return (
    <section>
      <h1 className="text-3xl my-4">Cryptocurrencies:</h1>
      {response &&
        (response as ICoinMarketsResponse[]).map((coin) => (
          <Coin key={coin.id} coin={coin} handleClick={handleClick} />
        ))}
    </section>
  );
};

export default Markets;

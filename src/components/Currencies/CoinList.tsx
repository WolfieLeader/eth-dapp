import React from "react";
import useAxios from "../../hooks/useAxios";
import Coin from "./Coin";
import { ICoinMarketsResponse } from "../../interfaces/coingecko";

interface ICoinListProps {
  popCryptoInfo: (coinName: string) => void;
}

const CoinList = ({ popCryptoInfo }: ICoinListProps) => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <div>
      <div className="text-white text-lg font-semibold tracking-tight sm:text-3xl mt-4">Sorted By Market Cap:</div>
      <section>
        {response &&
          (response as ICoinMarketsResponse[]).map((coin) => (
            <Coin key={coin.id} coin={coin} popCryptoInfo={popCryptoInfo} />
          ))}
      </section>
    </div>
  );
};

export default CoinList;

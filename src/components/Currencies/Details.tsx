import React from "react";
import { IMarketListResponse } from "../../interfaces/coingecko";

interface IDetailsProps {
  coin: IMarketListResponse;
}

const Details = ({ coin }: IDetailsProps) => {
  return (
    <div>
      <div className="flex items-center justify-start p-2 gap-1 text-left">
        <img className="w-16" src={coin.image} alt={coin.name} />
        <span className="leading-none">
          {coin.name}
          <small className="text-zinc-400"> ({coin.symbol.toUpperCase()})</small>
        </span>
      </div>
      <div>Price:{coin.current_price}</div>
      <div>Cap:{coin.market_cap}</div>
      <div>Vol:{coin.total_volume}</div>
      <div>Sup:{coin.total_supply}</div>
    </div>
  );
};

export default Details;

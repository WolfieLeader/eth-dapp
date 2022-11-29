import React, { useEffect, useRef } from "react";
import useAxios from "../../hooks/useAxios";
import CoinChart from "./Chart";
import { ICoinResponse } from "../../interfaces/coingecko";
interface IPopUpProps {
  currency: string;
  closeCryptoInfo: () => void;
}
const PopUp = ({ currency, closeCryptoInfo }: IPopUpProps) => {
  const { response } = useAxios(
    `coins/${currency}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeCryptoInfo();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCryptoInfo();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeCryptoInfo]);

  return (
    <div className="bg-zinc-900 border-2 border-zinc-600 z-40 rounded-lg w-2/3 h-3/4" ref={containerRef}>
      {response && (
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">{(response as ICoinResponse).market_data.ath.usd}</div>
          <CoinChart currency={currency} />
        </div>
      )}
    </div>
  );
};

export default PopUp;

import React, { useEffect, useRef } from "react";
import CoinChart from "./Chart";
import { IMarketListResponse } from "../../interfaces/coingecko";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
interface IPopUpProps {
  id: string;
  closeCryptoInfo: () => void;
  marketListResponse: IMarketListResponse[];
}
const PopUp = ({ id, closeCryptoInfo, marketListResponse }: IPopUpProps) => {
  const navigate = useNavigate();
  const coin = marketListResponse.find((coin) => coin.id === id);

  if (!coin) {
    navigate("/currencies", { replace: true });
    return null;
  }

  const containerRef = useClosePopUp(closeCryptoInfo);

  return (
    <div className="bg-zinc-900 border-2 border-zinc-600 z-40 rounded-lg w-[60%] h-[90%] p-1" ref={containerRef}>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Details coin={coin} />
        <CoinChart currency={id} symbol={coin.symbol.toUpperCase()} />
      </div>
    </div>
  );
};

const useClosePopUp = (closeCryptoInfo: () => void) => {
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

  return containerRef;
};

export default PopUp;

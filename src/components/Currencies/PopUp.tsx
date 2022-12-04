import React from "react";
import CoinChart from "./Chart";
import { IFormattedData } from "../../interfaces/coingecko";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
import { useClosePopUp } from "../../hooks/useClosePopUp";
interface IPopUpProps {
  id: string;
  closeCryptoInfo: () => void;
  marketListResponse: IFormattedData[];
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
    <div
      className="bg-zinc-900 border-2 border-zinc-600 z-40 rounded-lg w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[55%] h-fit max-h-[95%] p-1"
      ref={containerRef}>
      <div className="flex flex-col w-full h-full overflow-hidden p-1 sm:py-2 sm:px-4">
        <Details coin={coin} />
        <CoinChart currency={id} symbol={coin.symbol.toUpperCase()} />
      </div>
    </div>
  );
};

export default PopUp;

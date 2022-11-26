import React from "react";
import useAxios from "../../hooks/useAxios";
import { ICoinMarketsResponse } from "../../interfaces/coingecko";

interface ICoinDetailsProps {
  currency: string;
  closeCryptoInfo: () => void;
}
const CoinDetails = ({ currency, closeCryptoInfo }: ICoinDetailsProps) => {
  const { response } = useAxios(`coins/${currency}`);
  //?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false

  React.useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div
      className="absolute inset-0 z-10 bg-black bg-opacity-70 h-full w-full flex justify-center items-center"
      onClick={() => closeCryptoInfo()}>
      <div className="bg-white rounded-lg py-32 px-52">
        {response && <h1 className="text-3xl text-black">{(response as ICoinMarketsResponse).symbol}</h1>}
      </div>
    </div>
  );
};

export default CoinDetails;

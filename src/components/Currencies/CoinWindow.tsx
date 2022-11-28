import React from "react";
import useAxios from "../../hooks/useAxios";
import { ICoinMarketsResponse } from "../../interfaces/coingecko";

interface ICoinDetailsProps {
  currency: string;
  closeCryptoInfo: () => void;
}
const CoinDetails = ({ currency, closeCryptoInfo }: ICoinDetailsProps) => {
  const { response } = useAxios(
    `coins/${currency}?localization=false&tickers=false&sparkline=false&community_data=false&developer_data=false`
  );

  React.useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div
      className="fixed inset-0 z-30 bg-zinc-900 bg-opacity-70 h-full w-full flex justify-center items-center"
      onClick={() => closeCryptoInfo()}>
      <div className="bg-zinc-900 border-2 border-zinc-600 rounded-lg py-32 px-52">
        {response && <h1 className="text-3xl text-white">{(response as ICoinMarketsResponse).symbol}</h1>}
      </div>
    </div>
  );
};

export default CoinDetails;

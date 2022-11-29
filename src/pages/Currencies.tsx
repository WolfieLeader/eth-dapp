import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PopUp from "../components/Currencies/PopUp";
import MarketList from "../components/Currencies/MarketList";

const Currencies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ currency: "" });
  const currency = searchParams.get("currency");

  const popCryptoInfo = useCallback(
    (coinName: string) => {
      setSearchParams({ currency: coinName });
    },
    [setSearchParams]
  );

  const closeCryptoInfo = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return (
    <div>
      <MarketList popCryptoInfo={popCryptoInfo} />
      {currency && (
        <div className="fixed inset-0 z-30 bg-zinc-900 bg-opacity-70 h-full w-full flex justify-center items-center">
          <PopUp currency={currency} closeCryptoInfo={closeCryptoInfo} />
        </div>
      )}
    </div>
  );
};

export default Currencies;

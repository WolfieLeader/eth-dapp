import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import CoinWindow from "../components/Currencies/CoinWindow";
import CoinList from "../components/Currencies/CoinList";

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
      <CoinList popCryptoInfo={popCryptoInfo} />
      {currency && <CoinWindow currency={currency} closeCryptoInfo={closeCryptoInfo} />}
    </div>
  );
};

export default Currencies;

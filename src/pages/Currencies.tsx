import React, { useEffect, useState } from "react";
import { useRealTimePrice } from "../hooks/useRealTimePrice";

const Currencies = () => {
  const cryptoData = useRealTimePrice();

  return (
    <div>
      <h1>Currencies</h1>
    </div>
  );
};

export default Currencies;

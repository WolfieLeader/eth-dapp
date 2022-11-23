import React, { useEffect, useState, useRef } from "react";
import { useRealTimePrice, coins } from "../hooks/useRealTimePrice";

const Currencies = () => {
  const renderCount = useRef(0);
  const realTimePriceData = useRealTimePrice();

  useEffect(() => {
    console.log(realTimePriceData);
  }, [realTimePriceData]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h1>Currencies</h1>
      <p className="text-lg">Render count: {renderCount.current}</p>
    </div>
  );
};

export default Currencies;

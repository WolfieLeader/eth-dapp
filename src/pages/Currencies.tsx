import React from "react";
import { useSearchParams } from "react-router-dom";
import Markets from "../components/Currencies/Markets";

const Currencies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ currency: "" });
  const currency = searchParams.get("currency");

  return (
    <>
      <Markets setSearchParams={setSearchParams} />
    </>
  );
};

export default Currencies;

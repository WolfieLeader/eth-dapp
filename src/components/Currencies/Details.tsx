import React from "react";
import { IMarketListResponse } from "../../interfaces/coingecko";

interface IDetailsProps {
  coin: IMarketListResponse;
}

const Details = ({ coin }: IDetailsProps) => {
  return <div>{coin.name}</div>;
};

export default Details;

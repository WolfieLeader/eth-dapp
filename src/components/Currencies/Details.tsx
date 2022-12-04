import React, { useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { IMiniTicker } from "../../interfaces/binance";
import { IFormattedData } from "../../interfaces/coingecko";
import { formatNumber } from "../../utils/format";
import { NotWatching, Watching } from "./Watching";

interface IDetailsProps {
  coin: IFormattedData;
}

const Details = ({ coin }: IDetailsProps) => {
  return (
    <div className="flex flex-col font-semibold">
      <Title coin={coin} />
      <div className="flex flex-col p-1 md:py-2 md:px-4">
        <ReactiveBody coin={coin} />
        <StaticBody coin={coin} />
      </div>
    </div>
  );
};

const Title = ({ coin }: IDetailsProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-xl sm:text-2xl">
        <img className="w-[1.75em]" src={coin.image} alt={coin.name} />
        <span className="leading-none">{coin.name}</span>
        <span className="text-zinc-400 text-[0.55em]"> ({coin.symbol})</span>
      </div>
      <div className="flex flex-col justify-center items-center text-sm xs:text-md sm:text-lg">
        <div className="block sm:hidden">ATH:</div>
        <div className="hidden sm:block">All Time High:</div>
        <div className="text-indigo-300">${coin.ath}</div>
      </div>
    </div>
  );
};

const ReactiveBody = ({ coin }: IDetailsProps) => {
  const { price, high, low, isWatching } = useLatestCryptoData(coin);

  return (
    <div className="flex flex-col xsm:flex-row">
      <div className="w-full flex flex-col xs:flex-row xs:gap-1 xs:justify-between xsm:justify-start xsm:items-center text-base xs:text-xl sm:text-2xl">
        <div className="flex flex-row gap-1 items-center">
          <span>{isWatching ? <Watching /> : <NotWatching />}</span>
          <span className="whitespace-nowrap">Current Price:</span>
        </div>
        <div className="text-indigo-300 text-center text-lg sm:text-2xl">${price}</div>
      </div>
      <div className="flex flex-row items-center justify-between xsm:flex-col text-sm sm:text-base">
        <div className="text-green-400 text-opacity-60 font-thin whitespace-nowrap">High: ${high}</div>
        <div className="text-red-400 text-opacity-60 font-thin whitespace-nowrap">Low: ${low}</div>
      </div>
    </div>
  );
};

const StaticBody = ({ coin }: IDetailsProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-3 w-full text-center mt-1 gap-1 xs:border rounded border-zinc-600 text-base sm:text-xl">
      <div className="border rounded border-zinc-600 xs:border-none">
        <div>Market Cap:</div>
        <div className="text-indigo-300">${coin.market_cap}</div>
      </div>
      <div className="border rounded border-zinc-600 xs:border-none">
        <div>Volume:</div>
        <div className="text-indigo-300">${coin.total_volume}</div>
      </div>
      <div className="border rounded border-zinc-600 xs:border-none">
        <div>Total Supply:</div>
        <div className="text-indigo-300">{coin.total_supply}</div>
      </div>
    </div>
  );
};

const useLatestCryptoData = (coin: IFormattedData) => {
  const symbol = coin.symbol.toLowerCase();
  const { lastMessage } = useSocket(`wss://stream.binance.com:9443/ws/${symbol}usdt@miniTicker`);

  const formatter = (num: number) => formatNumber(num, false, 6);

  const [price, setPrice] = React.useState(coin.current_price);
  const [high, setHigh] = React.useState(coin.high_24h);
  const [low, setLow] = React.useState(coin.low_24h);
  const [isWatching, setIsWatching] = React.useState(false);

  useEffect(() => {
    if (lastMessage) {
      setIsWatching(true);
      const response = lastMessage as IMiniTicker;
      setPrice(formatter(Number(response.c)));
      setHigh(formatter(Number(response.h)));
      setLow(formatter(Number(response.l)));
    }
  }, [lastMessage]);

  return { price, high, low, isWatching };
};

export default Details;

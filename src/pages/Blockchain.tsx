import React, { useEffect } from "react";
import { useSocket } from "../hooks/useSocket";

const Blockchain = () => {
  const { lastMessage, isConnected } = useSocket(`wss://stream.binance.com:9443/ws/btcusdt@miniTicker`);

  useEffect(() => {
    console.log(lastMessage);
  }, [lastMessage]);
  return <div>Blockchain</div>;
};

export default Blockchain;

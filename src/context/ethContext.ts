import { createContext } from "react";

export const ethContext = createContext({
  isInstalled: false,
  isConnected: false,
  address: "",
  chainId: 0,
});

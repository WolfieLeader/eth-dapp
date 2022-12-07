import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useState, useEffect } from "react";
import { ethContext } from "../context/ethContext";

const ethereum = window.ethereum as MetaMaskInpageProvider;

interface IEthProvider {
  children: React.ReactNode;
}

export const EthProvider = ({ children }: IEthProvider) => {
  const { isInstalled } = useMetamaskDetector();
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState(0);

  useEffect(() => {
    if (isInstalled) {
      const handleAccountsChanged = (accounts: unknown) => {
        if (Array.isArray(accounts) && accounts.length > 0 && typeof accounts[0] === "string") {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setAddress("");
          setIsConnected(false);
        }
      };

      const detectWallets = async () => {
        try {
          const accounts = await ethereum.request({ method: "eth_accounts" });
          handleAccountsChanged(accounts);
        } catch (error) {
          console.error(error);
        }
      };

      const detectChainId = async () => {
        try {
          const chainId = await ethereum.request({ method: "eth_chainId" });
          if (typeof chainId === "string") {
            setChainId(parseInt(chainId));
          }
        } catch (error) {
          console.error(error);
        }
      };

      detectWallets();
      detectChainId();

      ethereum.on("accountsChanged", (accounts) => handleAccountsChanged(accounts));
      ethereum.on("chainChanged", () => window.location.reload());
    }
  }, [isInstalled]);

  return <ethContext.Provider value={{ isInstalled, isConnected, address, chainId }}>{children}</ethContext.Provider>;
};

const useMetamaskDetector = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider({ mustBeMetaMask: true });
      setIsInstalled(provider !== null);
    })();
  }, []);
  return { isInstalled };
};

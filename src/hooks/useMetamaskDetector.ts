import detectEthereumProvider from "@metamask/detect-provider";
import { useState, useEffect } from "react";

export const useMetamaskDetector = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider({ mustBeMetaMask: true });
      setIsMetamaskInstalled(provider !== null);
    })();
  }, []);
  return isMetamaskInstalled;
};

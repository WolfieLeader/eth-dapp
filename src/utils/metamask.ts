import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";

const ethereum = window.ethereum as MetaMaskInpageProvider;

export const connectMetamask = async (): Promise<void> => {
  const provider = await detectEthereumProvider({ mustBeMetaMask: true });
  if (provider)
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
};

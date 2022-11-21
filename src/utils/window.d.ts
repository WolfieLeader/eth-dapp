import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    /**Metamask injects the ethereum property into the window, but so do other wallets */
    ethereum?: MetaMaskInpageProvider;
  }
}
export {};

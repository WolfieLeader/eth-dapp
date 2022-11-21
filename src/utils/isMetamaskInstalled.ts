import detectEthereumProvider from "@metamask/detect-provider";

export const isMetamaskInstalled = async (): Promise<boolean> => {
  const provider = await detectEthereumProvider({ mustBeMetaMask: true });
  if (provider) {
    return true;
  }
  return false;
};

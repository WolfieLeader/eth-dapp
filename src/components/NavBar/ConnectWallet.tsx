import React, { useState } from "react";
import { useClosePopUp } from "../../hooks/useClosePopUp";
import { useMetamaskDetector } from "../../hooks/useMetamaskDetector";
import MetamaskLogo from "../../images/metamask.png";
import { connectMetamask } from "../../utils/metamask";

interface IConnectWalletProps {
  setIsConnectWalletOpen: (isOpen: boolean) => void;
}

const ConnectWallet = ({ setIsConnectWalletOpen }: IConnectWalletProps) => {
  const containerRef = useClosePopUp(() => setIsConnectWalletOpen(false));
  const isMetamaskInstalled = useMetamaskDetector();

  return (
    <div className="fixed inset-0 z-30 bg-zinc-900 bg-opacity-70 h-full w-full flex justify-center items-center">
      <div className="bg-indigo-900 z-50 rounded-lg p-4" ref={containerRef}>
        <div className="flex flex-col w-full h-full overflow-hidden py-2 px-4 text-3xl font-bold">
          Connect Wallet Via
        </div>
        <button
          disabled={isMetamaskInstalled}
          onClick={connectMetamask}
          className={`bg-indigo-600 w-full rounded text-2xl flex flex-row justify-center items-center py-1 font-bold
          ${isMetamaskInstalled ? "cursor-pointer hover:bg-indigo-700" : "cursor-not-allowed opacity-50"}`}>
          <img src={MetamaskLogo} alt="Metamask" className="w-[1.5em] h-[1.5em] mr-2" />
          <span>Metamask</span>
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;

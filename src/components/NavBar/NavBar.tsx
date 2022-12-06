import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import EthereumLogo from "../../images/ethereum.png";
import Bars from "./BarsIcon";
import ConnectWallet from "./ConnectWallet";
import Tabs from "./Tabs";

interface INavBarProps {
  name: string;
}

const navigation = [
  { title: "Home", href: "/" },
  { title: "Cryptocurrencies", href: "/currencies" },
  { title: "Smart Contracts", href: "/smartcontracts" },
];

const NavBar = ({ name }: INavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsMenuOpen(false);
    } else {
      setIsConnectWalletOpen(false);
    }
  }, [width]);

  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 bg-zinc-900 fixed w-full z-20 top-0 left-0 border-b border-zinc-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to={"/"} className="flex items-center">
            <img src={EthereumLogo} alt="Ethereum Logo" className="h-10 pr-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">{name}</span>
          </NavLink>
          <div className="flex md:order-2">
            <button
              onClick={() => setIsConnectWalletOpen((prev) => !prev)}
              className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800 max-md:hidden text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex">
              Connect
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600">
              <span className="sr-only">Open main menu</span>
              <Bars />
            </button>
          </div>
          <div
            className={`${isMenuOpen ? "block" : "hidden"}
          items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <Tabs navigation={navigation} />
          </div>
        </div>
      </nav>
      {isConnectWalletOpen && <ConnectWallet setIsConnectWalletOpen={setIsConnectWalletOpen} />}
    </>
  );
};

export default NavBar;

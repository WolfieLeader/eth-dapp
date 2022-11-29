import React, { useState } from "react";
import EthereumLogo from "../../images/ethereum.png";
import Bars from "./BarsIcon";
import Tabs from "./Tabs";

interface INavBarProps {
  name: string;
}

const NavBar = ({ name }: INavBarProps) => {
  const navigation = [
    { title: "Home", href: "/", current: true },
    { title: "Cryptocurrencies", href: "/currencies", current: false },
    { title: "Blockchain Demo", href: "#", current: false },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-zinc-900 fixed w-full z-20 top-0 left-0 border-b border-zinc-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={EthereumLogo} alt="Ethereum Logo" className="h-10 pr-2" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">{name}</span>
        </a>
        <div className="flex md:order-2">
          <button className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800 max-md:hidden text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex">
            Connect
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
  );
};

export default NavBar;

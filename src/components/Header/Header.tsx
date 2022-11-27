import React, { useState } from "react";
import Bars from "./Bars";
import { Bars } from "@heroicons/react";
import Tabs from "./Tabs";

interface IHeaderProps {
  companyName: string;
}

const Header = ({ companyName }: IHeaderProps) => {
  const navigation = [
    { title: "Home", href: "/", current: true },
    { title: "Cryptocurrencies", href: "/currencies", current: false },
    { title: "Blockchain Demo", href: "#", current: false },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-zinc-900 fixed w-full z-20 top-0 left-0 border-b border-zinc-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">{companyName}</span>
        </a>
        <div className="flex md:order-2">
          <button className="max-md:hidden text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
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

export default Header;

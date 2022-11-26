import React from "react";
import Bars from "./Bars";
import Tab from "./Tab";

interface IHeaderProps {
  companyName: string;
}

const Header = ({ companyName }: IHeaderProps) => {
  const navigation = [
    { title: "Home", href: "/", current: true },
    { title: "Cryptocurrencies", href: "/currencies", current: false },
    { title: "Blockchain Demo", href: "#", current: false },
  ];

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">{companyName}</span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="max-md:hidden text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
            Connect
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <Bars />
          </button>
        </div>
        <div
          className="bg-red-500 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            {navigation.map((item, index) => {
              return <Tab key={index} title={item.title} href={item.href} current={item.current} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

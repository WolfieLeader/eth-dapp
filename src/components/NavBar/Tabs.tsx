import React from "react";
import { NavLink } from "react-router-dom";

interface ITabProps {
  title: string;
  href: string;
}

const Tab = ({ title, href }: ITabProps) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) => {
          return `font-bold text-base block py-2 pl-3 pr-4 rounded md:p-0 ${
            isActive
              ? "text-white bg-indigo-500 md:text-indigo-400 md:bg-transparent"
              : "text-zinc-400 hover:text-white hover:bg-zinc-700 md:hover:bg-transparent"
          }`;
        }}>
        {title}
      </NavLink>
    </li>
  );
};

interface ITabsProps {
  navigation: ITabProps[];
}

const Tabs = ({ navigation }: ITabsProps) => {
  return (
    <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-zinc-800 md:bg-zinc-900 border-zinc-700">
      {navigation.map((item, index) => {
        return <Tab key={index} title={item.title} href={item.href} />;
      })}
    </ul>
  );
};

export default Tabs;

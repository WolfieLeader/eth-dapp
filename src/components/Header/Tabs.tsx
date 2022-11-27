import React from "react";

interface ITabProps {
  title: string;
  href: string;
  current: boolean;
}

const Tab = ({ title, href, current }: ITabProps) => {
  return (
    <li>
      {current ? (
        <a
          href={href}
          className="block py-2 pl-3 pr-4 bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0 text-white"
          aria-current="page">
          {title}
        </a>
      ) : (
        <a
          href={href}
          className="block py-2 pl-3 pr-4 rounded md:p-0 text-zinc-400 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700">
          {title}
        </a>
      )}
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
        return <Tab key={index} title={item.title} href={item.href} current={item.current} />;
      })}
    </ul>
  );
};

export default Tabs;

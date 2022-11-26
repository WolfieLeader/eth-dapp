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
          className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
          aria-current="page">
          {title}
        </a>
      ) : (
        <a
          href={href}
          className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
          {title}
        </a>
      )}
    </li>
  );
};

export default Tab;

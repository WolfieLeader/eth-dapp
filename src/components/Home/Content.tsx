import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Simplifying Crypto For You.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-500 sm:text-center">Dive Into The World Beyond</p>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <Link
            to="/currencies"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
            Crypto Prices
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </Link>
          <a
            href="https://github.com/WolfieLeader/eth-dapp"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
            Repository
            <span className="text-gray-400" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Content;

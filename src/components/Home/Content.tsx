import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="overflow-hidden max-h-screen">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-36 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Simplifying Crypto For You.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-center">Dive In To The World Beyond</p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Link
                  to="/currencies"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  Crypto Prices
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
                <Link
                  to="/smart-contracts"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                  Interact With Web3
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;

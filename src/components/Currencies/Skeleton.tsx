import React from "react";

const Skeleton = () => {
  return (
    <section className="container mt-4 bg-zinc-900 w-full border-2 border-zinc-600 rounded-md text-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 py-2 border-b border-zinc-600">
        <div>Name</div>
        <div>Price</div>
        <div className="hidden sm:block">Market Cap</div>
        <div className="hidden md:block">Volume</div>
        <div className="hidden md:block">Total Supply</div>
        <div>24h %</div>
      </div>
      {[...Array(10)].map((_, i) => (
        <CoinSkeleton key={i} />
      ))}
    </section>
  );
};

const CoinSkeleton = () => {
  return (
    <div className="h-16 items-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-b border-zinc-600 cursor-pointer bg-zinc-900 hover:bg-zinc-800">
      <div className="flex items-center justify-start pl-3 gap-1 text-left">
        <div className="w-6 h-6 bg-zinc-600 animate-pulse rounded-full"></div>
        <div className="w-24 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
      <div className="justify-center hidden sm:flex">
        <div className="w-20 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
      <div className="justify-center hidden md:flex">
        <div className="w-20 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
      <div className="justify-center hidden md:flex">
        <div className="w-20 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-4 bg-zinc-600 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;

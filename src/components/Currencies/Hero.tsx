import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <h1 className="text-indigo-400 text-3xl font-bold tracking-tight sm:text-4xl mt-4">
        Cryptocurrency Prices Currently:
      </h1>
      <div className="px-8">
        <h2 className="text-emerald-300 text-2xl font-normal sm:text-4xl mt-4 text-opacity-80">
          What is Cryptocurrency?
        </h2>
        <p className="px-4 mt-2 text-xl w-full md:w-3/5 text-white text-opacity-70">
          A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly
          impossible to counterfeit or double spend. Many cryptocurrencies are decentralized networks based on
          blockchain technology a distributed ledger enforced by a disparate network of computers.
        </p>
        <h3 className="text-amber-300 text-lg font-normal sm:text-2xl mt-4 text-opacity-80">Bonus</h3>
        <p className="px-4 text-xl w-full md:w-3/5 text-white text-opacity-70">
          A defining feature of cryptocurrencies is that they are generally not issued by any central authority,
          rendering them theoretically immune to government interference or manipulation.
        </p>
      </div>
    </section>
  );
};

export default Hero;

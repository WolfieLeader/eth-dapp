import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home"));
const Currencies = lazy(() => import("./pages/Currencies"));

const App = () => {
  return (
    <div className="isolate bg-black max-h-full">
      <Header companyName="Eth-dapp" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

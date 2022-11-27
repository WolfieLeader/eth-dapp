import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const Currencies = lazy(() => import("./pages/Currencies"));

const App = () => {
  return (
    <>
      <Header name="Dapp" />
      <div className="container mx-auto px-2 sm:px-4 py-20">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currencies" element={<Currencies />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;

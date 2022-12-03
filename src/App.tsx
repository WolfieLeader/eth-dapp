import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const Currencies = lazy(() => import("./pages/Currencies"));
const Blockchain = lazy(() => import("./pages/Blockchain"));

const App = () => {
  return (
    <>
      <NavBar name="Dapp" />
      <div className="container mx-auto py-20 px-4 md:px-12">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currencies" element={<Currencies />} />
            <Route path="blockchain" element={<Blockchain />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;

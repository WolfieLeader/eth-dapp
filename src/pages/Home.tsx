import React from "react";
import { BlurredBgDown, BlurredBgUp } from "../components/Home/BlurredBg";
import Content from "../components/Home/Content";

const Home = () => {
  return (
    <>
      <BlurredBgUp main="#818cf8" secondary="#fb7185" />
      <Content />
      <BlurredBgDown main="#818cf8" secondary="#fb7185" />
    </>
  );
};

export default Home;

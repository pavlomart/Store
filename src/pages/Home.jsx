import React, { useState } from "react";
import { mockedProducts } from "../api";
import Card from "../components/card/Card";
import Swiper from "../components/swiper/Swiper";

const Home = () => {

  return (
    <div className="my-[20px]">
      <Swiper />
      <div className="flex flex-wrap justify-center gap-[25px] mt-[35px]">
        {mockedProducts.map((item) => (
          <Card item={item} color="#BDBCBC"/>
        ))}
      </div>
    </div>
  );
};

export default Home;

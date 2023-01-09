import React, { useEffect, useState } from "react";
import { mockedProducts } from "../api";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Catalogue from "./Catalogue";
import Home from "./Home";

const CurrentPage = ({ item }) => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      {item.path === "/" && <Header />}
      {item.title === "home" ? (
        <Home />
      ) : (
        <div>
          <div className="flex flex-col bg-gray py-[10px] gap-[10px]">
            <div className="px-[16px] py-[8px] text-center">{item.title}</div>
            <div className="flex gap-[25px]">
              {item.subCetegories &&
                item.subCetegories.map((item) => {
                  return (
                    <div className="px-[4px] py-[4px] bg-gray border">
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-[25px] mt-[35px]">
            {mockedProducts.map((item) => (
              <Card item={item} color="#BDBCBC" />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CurrentPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockedProducts } from "../api";
import ArrowIcon from "../components/assets/svg/arrow-icon";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ActionPage from "./ActionPage";
import CategoryPage from "./CategoryPage";
import Home from "./Home";

const CurrentPage = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mb-[20px] overflow-hidden min-h-screen">
      {item.path === "/" && <Header />}
      {item.title === "home" ? <Home /> :
        <>
          <div className=" px-[16px] relative bg-gray py-[8px]">
            <div  onClick={() => navigate(-1)} className="w-[20px] absolute"><ArrowIcon /></div>
            <div className="flex justify-center uppercase">
              {item.title}
            </div>
          </div>
          {item.path.includes("categories") ? <CategoryPage item={item} /> : <ActionPage  />}
        </>
      }
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default CurrentPage;

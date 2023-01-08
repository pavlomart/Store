import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CartIcon from "../assets/svg/cart-icon";
import SearchIcon from "../assets/svg/search-icon";
import { mockedCategories } from "../../api";

const Header = () => {
  var settings = {
    infinite: false,
    centerPadding: 70,
    speed: 1000,
    slidesToShow: 4.5,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div>
      <div className="mx-[16px] my-[8px] flex justify-between items-center">
        <h3 className="uppercase font-bold text-[24px]">Trapper</h3>
        <div className="flex gap-[25px]">
          <div className="w-[25px]">
            <CartIcon />
          </div>
          <div className="w-[25px]">
            <SearchIcon />
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        className=" py-[16px] flex-wrap bg-dark flex justify-center gap-[25px] text-white"
      >
        {mockedCategories.map((item, index) => {
          return (
            <div key={index}>
              <Link
                className="flex flex-col items-center"
                to={`/categories${item.path}`}
              >
                <div
                  className={`w-[50px] h-[50px] rounded-[50%] ${
                    item.title === "sale" ? "bg-green" : "bg-white"
                  } p-[8px] `}
                >
                  {item.image}
                </div>
                <div className="uppercase text-center mt-[10px]">{item.title}</div>
              </Link>
            </div>
          );
        })}

        {/* {categories.map((category, index) => <Link key={index} to={`/categories/${category}`}>{category}</Link>)} */}
      </Slider>
    </div>
  );
};

export default Header;

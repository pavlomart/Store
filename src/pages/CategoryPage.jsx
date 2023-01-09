import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { mockedProducts } from "../api";
import Card from "../components/card/Card";
import { Link } from "react-router-dom";

const CategoryPage = ({ item, addToFav }) => {
  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 4.5,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div>
      {item.subCetegories && (
        <Slider {...settings}>
          {item.subCetegories.map((item) => (
            <Link to={item.path} className="p-[4px] text-center my-[10px]">
              {item.title}
            </Link>
          ))}
        </Slider>
      )}
      <div
        className="flex flex-wrap justify-center gap-[25px] mt-[35px]"
      >
        {mockedProducts.map((item) => (
          <Card addToFav={addToFav} item={item} color="#BDBCBC" />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

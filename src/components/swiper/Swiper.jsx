import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const mockSwiperData = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4704ba44-0d65-41dc-bd5b-57bfcf5f7b14/air-jordan-1-mid-mens-shoes-b3js2D.png",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b05de1c-b694-48b1-9855-f8494f99e0b3/air-force-1-07-lv8-mens-shoes-PZf0LL.png",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/go9ejlsilpz2hq0eophu/air-max-plus-mens-shoes-x9G2xF.png",
  },
];

const Swiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {mockSwiperData.map((item, index) => {
          return (
            <div key={index} className="w-full h-[250px] lg:h-[400px] lg:bg-[#F6F6F6]">
              <img
                className="object-cover lg:object-contain h-full w-full"
                src={item.image}
                alt="product"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Swiper;

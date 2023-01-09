import React, { useState } from "react";
import LikeIcon from "../assets/svg/like-icon";

const Card = ({item, color}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="w-[40%]">
              <>
                <img
                  className=" object-fill rounded-[10px] h-[200px]"
                  src={item.image}
                  alt="sneaker"
                />
                <div className="flex mt-[10px] justify-around items-start">
                  <div>
                    <h3 className="font-bold text-[14px]">{item.title}</h3>
                    <p className="font-[400] text-[12px]">{item.price}</p>
                    <p className="font-[400] text-[12px]">{item.size}</p>
                  </div>
                  <div onClick={() => setIsFavorite(!isFavorite)} className="w-[20px]">
                    <LikeIcon color={isFavorite ? "#D20000" : color}/>
                  </div>
                </div>
              </>
      {/* <img
        className=" object-fill rounded-[10px] h-[200px]"
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png"
        alt="sneaker"
      />
      <div className="flex mt-[10px] justify-around items-start">
        <div>
          <h3 className="font-bold text-[14px]">Nike</h3>
          <p className="font-[400] text-[12px]">1700 UAH</p>
          <p className="font-[400] text-[12px]">42</p>
        </div>
        <div className="w-[20px] border-[2px] ">
          <LikeIcon />
        </div>
      </div> */}
    </div>
  );
};

export default Card;

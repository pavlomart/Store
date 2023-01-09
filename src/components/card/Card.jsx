import React, { useState } from "react";
import LikeIcon from "../assets/svg/like-icon";

const Card = ({ item, color, addToFav }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div onClick={() => addToFav(item)} className="w-[40%]">
      <>
        <img
          className=" object-fill rounded-[10px] h-[200px]"
          src={item?.image}
          alt="sneaker"
        />
        <div className="flex mt-[10px] justify-around items-start">
          <div>
            <h3 className="font-bold text-[14px]">{item?.title}</h3>
            <p className="font-[400] text-[12px]">{item?.price}</p>
            <p className="font-[400] text-[12px]">{item?.size}</p>
          </div>
          <div onClick={() => setIsFavorite(!isFavorite)} className="w-[20px]">
            <LikeIcon color={isFavorite ? "#D20000" : color} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;

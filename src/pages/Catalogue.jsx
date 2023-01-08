import React from "react";
import { Link } from "react-router-dom";
import { mockedCategories } from "../api";

const Catalogue = () => {
  return (
    <div className="flex flex-col my-[8px] gap-y-[10px]">
      {mockedCategories.map((item, index) => {
        return (
          <Link
            to={`/categories${item.path}`}
            key={index}
            className="mx-[16px] flex relative items-center gap-x-[25px] rounded-[10px] px-[16px] py-[8px] bg-gray"
          >
            <div className="w-[35px]">{item.image}</div>
            <div className="uppercase">{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Catalogue;

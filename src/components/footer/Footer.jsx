import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockFooterData } from "../../api";


const Footer = () => {

  return (
    <div className="p-[8px] flex fixed w-full mt-auto bottom-[0] items-center justify-between bg-dark">
      {mockFooterData.map((item, index) => {
        return (
          <div key={index}>
            <Link
              className="flex flex-col items-center"
              to={`${item.path}`}
            >
              <div className="w-[50px] h-[50px] rounded-[50%] bg-dark p-[8px] ">
                {item.image}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;

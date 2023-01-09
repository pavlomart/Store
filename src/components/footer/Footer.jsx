import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "../assets/svg/add-icon";
import HomeIcon from "../assets/svg/home-icon";
import LikeIcon from "../assets/svg/like-icon";
import MessageIcon from "../assets/svg/message-icon";
import ProfileIcon from "../assets/svg/profile-icon";

const mockFooterData = [
  {
    image: <HomeIcon />,
    path: "/",
  },
  {
    image: <MessageIcon />,
    path: "/direct",
  },
  {
    image: <AddIcon />,
    path: "/add",
  },
  {
    image: <LikeIcon />,
    path: "/favorite",
  },
  {
    image: <ProfileIcon />,
    path: "/profile",
  },
];

const Footer = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="p-[8px] flex sticky mt-auto bottom-[0] items-center justify-between bg-dark">
      {mockFooterData.map((item, index) => {
        return (
          <div key={index} onClick={() => setActive(index)}>
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

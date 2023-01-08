import React, { useEffect, useState } from "react";
import Catalogue from "./Catalogue";
import Home from "./Home";

const CurrentPage = ({ item }) => {
  return (
    <div className="">
      {item.title === "home" ? (
        <Home />
      ) : item.title === "catalogue" ? (
        <Catalogue />
      ) : (
        item.title
      )}
    </div>
  );
};

export default CurrentPage;

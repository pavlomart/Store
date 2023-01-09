import React from "react";
import Card from "../components/card/Card";

const ActionPage = ({ favoriteArr }) => {
  return (
    <div>
      {favoriteArr.map((item) => <Card item={item} color="#DD0000"/>)}
    </div>
  );
};

export default ActionPage;

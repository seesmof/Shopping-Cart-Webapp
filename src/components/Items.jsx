import React from "react";
import ShopItems from "../ShopItems.js";
import Item from "./Item.jsx";

const Items = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ShopItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Items;

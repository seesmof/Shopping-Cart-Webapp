import React from "react";
import ShopItems from "../ShopItems.js";

const Items = () => {
  console.log(ShopItems);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ShopItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={"../assets/" + item.image} alt={item.name} />
            <div className="card-body">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;

import React from "react";
import ShopItems from "../ShopItems.js";

const Items = () => {
  console.log(ShopItems);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ShopItems.map((item) => (
          <div className="card" key={item.id}>
            <div className="w-full bg-blue-400 rounded-lg aspect-square"></div>
            {/* <img src={"../assets/" + item.image} alt={item.name} /> */}
            <div className="flex flex-col">
              <div className="flex flex-col mt-2">
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p className="text-slate-700">${item.price}</p>
              </div>

              <div className="grid grid-cols-2 items-center mt-2">
                <div className="flex flex-row gap-2 items-center">
                  <button className="rounded-full bg-blue-100 w-6 h-6">
                    -
                  </button>
                  <p className="font-medium">{item.quantity}</p>
                  <button className="rounded-full bg-blue-100 w-6 h-6">
                    +
                  </button>
                </div>
                <button className="rounded-lg bg-blue-400 hover:bg-blue-500 active:scale-95 duration-500 w-full p-1 font-medium text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;

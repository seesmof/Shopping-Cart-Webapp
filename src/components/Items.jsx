import React from "react";
import ShopItems from "../ShopItems.js";

const Items = () => {
  console.log(ShopItems);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ShopItems.map((item) => (
          <div className="card p-4" key={item.id}>
            <div className="flex flex-col gap-4">
              <img src={`/assets/${item.image}`} alt={item.name} />

              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h2 className="font-medium text-lg">{item.name}</h2>
                  <p className="text-slate-700">${item.price}</p>
                </div>
                <div className="grid grid-cols-2 pt-2 items-center">
                  <div className="flex flex-row gap-2 items-center">
                    <button className="rounded-full bg-slate-100 w-6 h-6">
                      -
                    </button>
                    <p className="font-medium">{item.quantity}</p>
                    <button className="rounded-full bg-slate-100 w-6 h-6">
                      +
                    </button>
                  </div>
                  <button className="rounded-lg bg-slate-400 hover:bg-slate-500 active:scale-95 duration-500 w-full p-1 font-medium text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;

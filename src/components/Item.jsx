import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

const Item = ({ item }) => {
  const toggleFavorite = (item) => {
    item.isFavorite = !item.isFavorite;
  };

  return (
    <>
      <div className="card p-4 flex flex-row md:flex-col gap-y-4 gap-x-6">
        {/* ITEM IMAGE */}
        <img
          src={`/assets/${item.image}`}
          alt={item.name}
          className="w-24 h-24 md:w-full md:h-full"
        />

        {/* ITEM DESCRIPTION */}
        <div className="flex flex-col w-full justify-between">
          {/* ITEM NAME */}
          <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
            <div className="flex flex-col">
              <h2 className="font-medium text-lg">{item.name}</h2>
            </div>
            <button className="" onClick={() => toggleFavorite(item)}>
              {item.isFavorite ? (
                <AiFillHeart className="text-red-500 text-xl" />
              ) : (
                <AiOutlineHeart className="hover:text-red-500 text-xl" />
              )}
            </button>
          </div>

          <div className="flex flex-row justify-between pt-2 items-center">
            <p className="font-medium text-lg">${item.price}</p>
            <button className="rounded-full bg-blue-400 hover:bg-blue-500 active:scale-95 duration-500 w-min p-2 font-medium text-white">
              <AiOutlineShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

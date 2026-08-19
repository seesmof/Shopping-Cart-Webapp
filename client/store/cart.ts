import { Item } from "@/data/ShopItems";
import { create } from "zustand";

type CartState = {
  cart: Item[];
  add: (item: Item) => void;
  remove: (name: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>((set) => ({
  cart: [],
  add: (item) => set((state) => ({ cart: [...state.cart, item] })),
  remove: (name) =>
    set((state) => ({ cart: state.cart.filter((item) => item.name !== name) })),
  clear: () => set((state) => ({ cart: [] })),
}));

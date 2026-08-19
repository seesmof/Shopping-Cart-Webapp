"use client";

import { useCart } from "@/store/cart";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b-2">
      <div className="max-w-md mx-auto p-3 flex justify-between items-center">
        <h1 className="font-bold hover:underline underline-offset-4">
          <Link href={"/"}>CartApp</Link>
        </h1>
        <Link href={"/cart"}>
          <Button className="relative">
            Cart
            <div className="absolute -top-1 -right-1 z-50 rounded-full bg-sky-500 w-4 h-4 flex items-center justify-center">
              {cart.length}
            </div>
          </Button>
        </Link>
      </div>
    </nav>
  );
}

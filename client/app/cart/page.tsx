"use client";

import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import Image from "next/image";

export default function CartPage() {
  const { cart, remove } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-md p-3 flex flex-col gap-3">
          {cart.map((item, index) => (
            <div
              className="border shadow rounded-md p-5 flex gap-5"
              key={index}
            >
              <Image
                src={`/${item.image}`}
                alt={`An image of ${item.image.split(".")[0]}`}
                width={50}
                height={50}
                className="object-contain self-start"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">{item.name}</h2>
                <p className="py-2">The item costs ${item.price}.</p>
                <Badge variant={"secondary"}>{item.category}</Badge>
                <div className="flex flex-row gap-5 mt-5">
                  <Button
                    onClick={() => remove(item.name)}
                    className={"w-full"}
                    variant={"secondary"}
                  >
                    Buy
                  </Button>
                  <Button
                    onClick={() => remove(item.name)}
                    className={"w-full"}
                    variant={"destructive"}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

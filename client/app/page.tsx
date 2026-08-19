"use client";

import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { groceryItems } from "@/data/ShopItems";
import { useCart } from "@/store/cart";
import Image from "next/image";

export default function IndexPage() {
  const { add } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-md p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {groceryItems.map((item, index) => (
            <Card key={index}>
              <Image
                src={`/${item.image}`}
                width={100}
                height={100}
                alt={`An image of ${item.image.split(".")[0]}`}
                className="self-center p-3"
              />
              <CardHeader>
                <CardAction>
                  <Badge variant={"secondary"}>{item.category}</Badge>
                </CardAction>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>The item costs ${item.price}.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => add(item)} className={"w-full"}>
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

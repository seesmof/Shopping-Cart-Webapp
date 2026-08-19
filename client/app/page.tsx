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
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-white border-b-2">
        <div className="max-w-md mx-auto p-3 flex justify-between items-center">
          <h1 className="font-bold hover:underline underline-offset-4">
            <Link href={"/"}>CartApp</Link>
          </h1>
          <Button className="relative">
            <p>Cart</p>
            <div className="absolute -top-1 -right-1 z-50 rounded-full bg-sky-500 w-4 h-4 flex items-center justify-center">
              0
            </div>
          </Button>
        </div>
      </nav>
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
                <Button className={"w-full"}>Add to cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

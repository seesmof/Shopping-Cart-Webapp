import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="min-h-">
      <div className="sticky top-0 z-50 bg-white border-b-2">
        <div className="max-w-md mx-auto p-3 flex justify-between items-center">
          <h1 className="font-bold">
            <Link href={"/"}>CartApp</Link>
          </h1>
          <Button>Cart</Button>
        </div>
      </div>
    </div>
  );
}

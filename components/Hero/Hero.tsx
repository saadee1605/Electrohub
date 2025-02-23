import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <div className="mt-20 md:mt-36 p-3 ">
        <div className="  flex flex-col items-center justify-center space-y-3">
          <div className="space-y-6 ">
            {" "}
            <p className="text-3xl font-bold md:text-5xl text-center  ">
            Discover the Best Deals on Top Products!
            </p>
            <p className="text-xl md:text-3xl text-center px-8 ">
              {" "}
              Shop the latest gadgets, fashion, and essentials at unbeatable prices.

            </p>{" "}
          </div>
          <div className="w-full space-y-3 md:w-1/2 md:space-x-4  flex flex-col md:space-y-0 md:flex-row items-center justify-center m-auto text-center">
            {" "}
            <Link href="/products">
              {" "}
              <Button>Shop Now</Button>
            </Link>
            <Link href="/categories">
              {" "}
              <Button>Explore Categories</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

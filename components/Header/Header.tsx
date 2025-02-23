"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Tag, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Dropdown from "../Dropdown/Dropdown";
import useCartStore from "@/store/cart-store";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const { totalQuantity } = useCartStore();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Offers", path: "/offers", icon: Tag },
    { name: "Categories", path: "/categories", icon: Tag },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
  ];

  return (
    <>
      <header className="header fixed top-0 w-full flex justify-between bg-slate-400 pt-2 pb-2  px-2 md:px-3">
        <div className="">
          <div className="flex items-center  md:space-x-3 lg:space-x-6">
            <p className="text-xl lg:text-2xl font-bold">Electro-Hub</p>

            {navItems.slice(0, 4).map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className={`hidden  md:flex flex-col items-center w-fit  px-2 py-1 rounded-md transition-all hover:bg-slate-500 hover:text-white ${
                  pathname === path
                    ? "bg-slate-600 text-white hover:bg-slate-600 hover:text-white"
                    : "text-black"
                }`}
              >
                <Icon size={20} className="hidden lg:block" />
                <p className="text-sm lg:text-lg">
                  {name === "Categories" ? <Dropdown /> : name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className=" flex items-center">
          <div className="flex items-center space-x-1 lg:space-x-4">
            {navItems.slice(4).map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className={`hidden  md:flex flex-col items-center px-2 py-1 rounded-md transition-all hover:bg-slate-500 hover:text-white ${
                  pathname === path
                    ? "bg-slate-600 text-white hover:bg-slate-600 hover:text-white"
                    : "text-black"
                }`}
              >
                <Icon
                  size={20}
                  className={`hidden lg:block ${
                    totalQuantity > 0 ? "text-green-600" : ""
                  }`}
                />
                <p
                  className={`text-sm lg:text-lg ${
                    totalQuantity > 0 ? "text-green-600" : ""
                  }`}
                >
                  {name}
                </p>
              </Link>
            ))}

            <div className="h-7 lg:h-9 hidden  md:flex rounded-sm  overflow-hidden">
              <input
                type="text"
                className="text-sm lg:text-lg w-24 lg:w-40 lg:py-3 px-1 lg:px-3 outline-none flex-1"
                placeholder="Search"
              />
              <Button className="rounded-none h-full bg-black text-white px-1 lg:px-4 ">
                Search
              </Button>
            </div>
            <div>
              {showMenu ? (
                <Menu
                  className="w-8 h-8 text-black md:hidden"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <X
                  className="w-8 h-8 text-black md:hidden"
                  onClick={() => setShowMenu(!showMenu)}
                />
              )}
            </div>
          </div>
        </div>
        {!showMenu ? (
          <nav className=" right-0  mt-10  h-screen absolute border-t p-4 space-y-1 bg-slate-400 md:hidden">
            {navItems.map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setShowMenu(true)}
                className={`flex  flex-col items-center p-2  transition-all hover:bg-slate-500 hover:text-white ${
                  pathname === path
                    ? "bg-slate-600 text-white hover:bg-slate-600 hover:text-white"
                    : "text-black"
                }`}
              >
                <div className="flex items-center justify-start px-4 w-full space-x-8">
                  <Icon size={20} />
                  <p className="text-lg">{name}</p>
                </div>
              </Link>
            ))}
          </nav>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}

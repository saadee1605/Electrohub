"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Tag, ShoppingCart, LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import Dropdown from "../Dropdown/Dropdown";
import useCartStore from "@/store/cart-store";

export default function Header() {
  const pathname = usePathname();
  const { totalQuantity } = useCartStore();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Offers", path: "/offers", icon: Tag },
    { name: "Categories", path: "/categories", icon: Tag },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
  ];

  return (
    <header className="header fixed top-0 w-full flex justify-between bg-slate-400 pt-1 pb-1 px-2 md:px-3">
      <div className="">
        <div className="flex items-center space-x-6">
          <p className="text-2xl font-bold">Electro-Hub</p>

          {navItems.slice(0, 4).map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`flex flex-col items-center w-fit  px-2 py-1 rounded-md transition-all hover:bg-slate-500 hover:text-white ${
                pathname === path
                  ? "bg-slate-600 text-white hover:bg-slate-600 hover:text-white"
                  : "text-black"
              }`}
            >
              <Icon size={20} />
              <p className="text-lg">
                {name === "Categories" ? <Dropdown /> : name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className=" flex items-center">
        <div className="flex items-center space-x-4">
          {navItems.slice(4).map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`flex flex-col items-center px-2 py-1 rounded-md transition-all hover:bg-slate-500 hover:text-white ${
                pathname === path
                  ? "bg-slate-600 text-white hover:bg-slate-600 hover:text-white"
                  : "text-black"
              }`}
            >
              <Icon size={20} />
              <p className="text-lg">{name}</p>
            </Link>
          ))}

          <div className="h-9 flex rounded-sm  overflow-hidden">
            <input
              type="text"
              className="px-3 outline-none flex-1"
              placeholder="Search any product"
            />
            <Button className="rounded-none h-full bg-black text-white px-4 ">
              Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

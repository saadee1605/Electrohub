"use client";

import Hero from "@/components/Hero/Hero";
import Hotproducts from "@/components/Hotproducts/Hotproducts";
import { useState } from "react";
export default function Home() {
  const [mousePosition] = useState({ x: 0, y: 0 });
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl opacity-20 transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${
            mousePosition.y * 0.1
          }px)`,
        }}
      />
      <div
        className="fixed top-96 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 transition-transform duration-300"
        style={{
          transform: `translate(${-mousePosition.x * 0.1}px, ${
            -mousePosition.y * 0.1
          }px)`,
        }}
      />
      <Hero />
      <Hotproducts />
    </div>
  );
}

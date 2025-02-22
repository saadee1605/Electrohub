"use client";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getHotProducts } from "@/actions/Products";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isHotProduct: boolean;
  description: string;
}

export default function HotProducts() {
  const [hotProducts, setHotProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchHotProducts() {
      try {
        const data = await getHotProducts();

        setHotProducts(data);
      } catch (error) {
        console.error("Error fetching hot products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotProducts();
  }, []);
  if (loading) {
    return (
      <div className="mt-48 md:mt-36 p-3">
        <div className="grid grid-cols-2 h-screen">
          {/* Left Section Skeleton */}
          <div className="text-center">
            <Skeleton className="h-10 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-4" />
            <Skeleton className="w-64 h-64 mx-auto mt-4" />
            <Skeleton className="h-6 w-1/4 mx-auto mt-2" />
          </div>

          {/* Right Section Skeleton */}
          <div className="overflow-y-auto">
            <Skeleton className="h-10 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-4" />
            <Skeleton className="w-64 h-64 mx-auto mt-4" />
            <Skeleton className="h-6 w-1/4 mx-auto mt-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-48 md:mt-36 p-3">
      <p className="text-3xl font-bold md:text-5xl text-center">
        Best Hot Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {hotProducts && hotProducts.length > 0 ? (
          hotProducts.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-xl">
            No hot products available.
          </p>
        )}
      </div>
    </div>
  );
}

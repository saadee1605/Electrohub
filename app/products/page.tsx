"use client";
import Card from "@/components/Card/Card";
import { getallProducts } from "@/actions/Products";
import { useEffect, useState } from "react";
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

export default function Page() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {

    async function getProducts() {
      try {
        const products: Product[] = await getallProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
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
    <div className="mt-20 md:mt-36 p-3">
      <p className="text-3xl font-bold md:text-5xl text-center">
        Electro-Hub - all porducts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.length > 0 ? (
          products.map((product: Product) => (
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
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}

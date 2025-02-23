"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import categories from "@/Data/Categories";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div className="mt-20 md:mt-36 p-3">
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
    <>
      <div className="mt-20  md:mt-36 p-3">
        <p className="text-3xl font-bold md:text-5xl text-center">
          Top Categories
        </p>

        {loading ? (
          <div className="text-center mt-10 text-lg font-semibold">
            Loading...
          </div>
        ) : (
          <div className="grid mt-10 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
            {categories.map((category, index) => (
              <div key={index} className="space-y-4 border-r">
               <Image
  src={category.image}
  alt="Category Image"
  width={500} // Adjust as needed
  height={192} // 48 * 4 (tailwind height conversion)
  className="w-full h-48 object-cover rounded-md"
  priority // Optional: Improves loading performance
/>
                <p className="font-bold">{category.name}</p>
                <p>{category.description}</p>

                <div>
                  <Link href={`/categories/${category.category}`}>
                    <Button>Explore Products</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

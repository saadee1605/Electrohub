"use client";
import { useParams } from "next/navigation";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import { getSingleProduct, getCategoryWiseProduct } from "@/actions/Products";
import { Skeleton } from "@/components/ui/skeleton";
import reviews from "@/Data/Reviews";
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
  const params = useParams();
  const { slug, subslug } = params;

  const categorySlug = Array.isArray(slug) ? slug[0] : slug || "";
  const productId = Array.isArray(subslug) ? subslug[0] : subslug || "";

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProductData() {
      try {
        setLoading(true);

        const fetchedProduct: Product | null = await getSingleProduct(
          productId,
          categorySlug
        );

        if (!fetchedProduct) {
          setError("Product not found");
          return;
        }

        setProduct(fetchedProduct);

        const fetchedRelatedProducts: Product[] = await getCategoryWiseProduct(
          categorySlug
        );
        setRelatedProducts(
          fetchedRelatedProducts.filter((p) => p._id !== productId)
        );
      } catch (err) {
        setError("Error fetching product data");
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    if (productId) fetchProductData();
  }, [categorySlug, productId]);

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
            <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-full mx-auto" />
          </div>
        </div>

        {/* Related Products Skeleton */}
        <div className="mt-12 border-t pt-5">
          <p className="text-2xl font-bold text-center mb-6">
            Related Products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className="h-64 w-full" />
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mt-20 md:mt-36 p-3">
        <p className="text-3xl font-bold md:text-5xl text-center">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <div className="mt-20 lg:mt-36 p-3 space-x-3">
      <div className="flex flex-col md:grid md:grid-cols-2 ">
        <div className="text-center">
          <p className="text-3xl font-bold md:text-5xl">{product.name}</p>
          <p className="text-xl mt-2">{product.description}</p>
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 mx-auto mt-4"
          />
          <p className="text-xl font-semibold mt-2">${product.price}</p>
        </div>
        <div className="md:overflow-y-auto md:max-h-96 p-4 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b pb-3 mb-3">
                <p className="font-semibold text-lg">{review.reviewer}</p>
                <p className="text-yellow-500">
                  {"⭐".repeat(review.rating)} ({review.rating}/5)
                </p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>

      <div className="mt-12  pt-5">
        <p className="text-2xl font-bold text-center mb-6">Related Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
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
            <p className="text-center col-span-3 text-gray-500">
              No related products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

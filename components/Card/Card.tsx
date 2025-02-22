"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import useCartStore from "@/store/cart-store"; // Import Zustand store

interface CardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default function Card({
  id,
  name,
  category,
  price,
  image,
  description,
}: CardProps) {
  const addToCart = useCartStore((state) => state.addToCart); // Get addToCart function from Zustand

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 }); // Add item to cart
  };

  return (
    <div key={id} className="card border p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600 uppercase underline">{category}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-semibold mt-2">${price}</p>

        <div className="flex justify-between mt-2">
          <Link href={`/categories/${category}/${id}`}>
            <Button>Show More</Button>
          </Link>
          <Button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-600">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

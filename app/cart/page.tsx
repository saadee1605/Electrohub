"use client";
import useCartStore from "@/store/cart-store";
import { Button } from "@/components/ui/button";
interface Cart{
    id:number,
    name:string,
    quantity:number,
    price:number
}
export default function Cart() {
  const { cart, totalQuantity, removeFromCart } = useCartStore();

  return (
    <div className="mt-20 md:mt-36 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart 🛒</h2>
      <p className="text-lg font-semibold text-gray-700 mb-4">
        Total Items: <span className="text-blue-600">{totalQuantity}</span>
      </p>

      {/* Cart Items */}
      <div className="mt-6 space-y-4">
        {cart.length > 0 ? (
          cart.map((item:Cart) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-md shadow-sm"
            >
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600">
                  Quantity: <span className="font-semibold">{item.quantity}</span>
                </p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <Button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Remove
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty 🛍️</p>
        )}
      </div>
    </div>
  );
}

import { create } from "zustand";

// Create store
const useCartStore = create((set) => ({
  cart: [],
  totalQuantity: 0,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        updatedCart = [...state.cart, item];
      }

      return {
        cart: updatedCart,
        totalQuantity: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return {
        cart: updatedCart,
        totalQuantity: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        cart: updatedCart,
        totalQuantity: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),

  clearCart: () => set({ cart: [], totalQuantity: 0 }),
}));

export default useCartStore;

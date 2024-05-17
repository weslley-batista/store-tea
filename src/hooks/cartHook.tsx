import type ProductType from "@/types/product";
import { useState } from "react";

export const CartHook = () => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(
      cart.filter((product) => product.id !== parseInt(productId as string))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, setCart, addToCart, removeFromCart, clearCart };
};

import type ProductType from "@/types/product";
import { useState } from "react";

export const CartHook = () => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };

  return { cart, setCart, addToCart };
};

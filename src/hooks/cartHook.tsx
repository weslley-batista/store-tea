import { Product } from "@/types/product";
import { useState } from "react";

export const CartHook = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return { cart, setCart };
};

import { useState } from "react";
import ProductType from "@/types/product";

export const PayHook = () => {
  // This function is used to calculate the total amount of the cart
  const [total, setTotal] = useState<number>(0);
  const setTotalAmount = (cart: ProductType[]) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  };

  // This function is used to calculate the quantity of each product
  const [quantityPerProduct, setQuantityPerProduct] = useState<number>(0);

  const addQuantity = () => {
    setQuantityPerProduct(quantityPerProduct + 1);
  };

  const subtractQuantity = () => {
    setQuantityPerProduct(quantityPerProduct - 1);
  };

  return {
    // total cart
    total,
    setTotal,
    setTotalAmount,
    // product quantity in cart
    quantityPerProduct,
    addQuantity,
    subtractQuantity,
  };
};

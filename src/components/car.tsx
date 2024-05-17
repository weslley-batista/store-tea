import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "./ui/scroll-area";
import ProductType from "@/types/product";
import { ItemsCar } from "./itemsCar";
import { PayHook } from "@/hooks/payHook";
import { useEffect } from "react";
import { CheckoutCard } from "./checkoutCard";

interface ItemsCarProps {
  cart: ProductType[];
  clearCart: () => void;
  removeFromCart: (productId: string) => void;
}

export function Car({ cart, clearCart, removeFromCart }: ItemsCarProps) {
  const { total, setTotalAmount } = PayHook();

  useEffect(() => {
    setTotalAmount(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className="w-60">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="w-full">
            Ver carrinho <ShoppingCart className="ml-2 h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex w-full justify-between">
            <DrawerTitle>Carrinho</DrawerTitle>
            <DrawerClose asChild>
              <X className="h-4 w-4 cursor-pointer" />
            </DrawerClose>
          </DrawerHeader>

          <div className="flex flex-col gap-4 p-4">
            <ScrollArea className="h-72">
              {cart.map((item) => (
                <ItemsCar
                  key={item.id}
                  id={item.id as never}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                  origin={item.origin}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ScrollArea>
          </div>
          <DrawerFooter>
            <DrawerDescription>Total: R$ {total}</DrawerDescription>
            <CheckoutCard confirmCheckout={clearCart} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

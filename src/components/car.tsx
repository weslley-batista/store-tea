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

interface ItemsCarProps {
  cart: ProductType[];
}

export function Car({ cart }: ItemsCarProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">
          Adicionar ao carrinho <ShoppingCart className="ml-2 h-4 w-4" />
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
              />
            ))}
          </ScrollArea>
        </div>
        <DrawerFooter>
          <DrawerDescription>Total: R$ 0,00</DrawerDescription>
          <Button className="w-full">Finalizar compra</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

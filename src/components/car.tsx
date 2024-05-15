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
import { ItemsCar } from "./itemsCar";
import { ScrollArea } from "./ui/scroll-area";

export function Car() {
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
            <ItemsCar
              id={1 as never}
              name={"nome do item"}
              description={"descrição do item"}
              price={0}
              image={""}
              category={""}
              origin={""}
            />
            <ItemsCar
              id={1 as never}
              name={"nome do item"}
              description={"descrição do item"}
              price={0}
              image={""}
              category={""}
              origin={""}
            />
            <ItemsCar
              id={1 as never}
              name={"nome do item"}
              description={"descrição do item"}
              price={0}
              image={""}
              category={""}
              origin={""}
            />
            <ItemsCar
              id={1 as never}
              name={"nome do item"}
              description={"descrição do item"}
              price={0}
              image={""}
              category={""}
              origin={""}
            />
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

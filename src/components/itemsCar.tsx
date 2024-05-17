import { Banknote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import type ProductType from "@/types/product";
import { Button } from "./ui/button";

interface productActions {
  removeFromCart: (productId: string) => void;
}

type CardProps = React.ComponentProps<typeof Card> &
  ProductType &
  productActions;

export function ItemsCar({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "w-12/12 flex border rounded-md p-4 justify-around items-center",
        className
      )}
      {...props}
    >
      <Avatar>
        <AvatarImage src={props.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Banknote />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Total do item</p>
            <p className="text-sm text-muted-foreground">
              {props.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            props.removeFromCart(props.id as string);
          }}
        >
          Remover
        </Button>
      </CardFooter>
    </Card>
  );
}

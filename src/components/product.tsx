import { GanttChart, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type ProductType from "@/types/product";

interface productActions {
  addToCart: (product: ProductType) => void;
  viewMore: () => void;
}

// id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   origin: string;

type CardProps = React.ComponentProps<typeof Card> &
  ProductType &
  productActions;

export function Product({ className, ...props }: CardProps) {
  const product = {
    id: props.id,
    name: props.name,
    description: props.description,
    price: props.price,
    image: props.image,
    category: props.category,
    origin: props.origin,
  };

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col text-center justify-center space-y-4 rounded-md">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={props.image}
              alt={props.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {props.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              {props.category} - {props.origin}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={props.viewMore}
        >
          Ver Mais <GanttChart className="ml-2 h-4 w-4" />
        </Button>
        <Button
          className="w-full"
          onClick={() => {
            props.addToCart(product);
          }}
        >
          Adicionar ao carrinho <ShoppingCart className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

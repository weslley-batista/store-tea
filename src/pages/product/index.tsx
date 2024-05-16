import { useParams } from "react-router-dom";
import products from "@/mock";
import { Banknote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type ProductType from "@/types/product";
import { NavBar } from "@/components";

type CardProps = React.ComponentProps<typeof Card>;

function Product({ className, ...props }: CardProps) {
  const { id } = useParams();

  const product: ProductType | undefined = products.find(
    (product) => product.id === parseInt(id as string)
  );

  return (
    <>
      <div className="flex items-center justify-between px-20 py-10">
        <NavBar />
      </div>
      <div className="px-24 w-auto">
        <Card
          className={cn("w-full flex justify-evenly items-center", className)}
          {...props}
        >
          <CardContent className="flex flex-col gap-2">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product?.image}
                alt={product?.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <Banknote />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Valor do produto
                </p>
                <p className="text-sm text-muted-foreground">
                  {product?.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle>Descrição do produto</CardTitle>
            <CardDescription>{product?.description}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}

export default Product;

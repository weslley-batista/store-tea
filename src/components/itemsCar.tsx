import { Banknote, Plus, Minus } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import type { Product } from "@/types/product";

type CardProps = React.ComponentProps<typeof Card> & Product;

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
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
              Send notifications to device.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-8 items-center justify-center">
        <Button className="w-3/5">
          <Minus className="h-4 w-4" />
        </Button>
        <div className="w-3/5 h-8 text-center " aria-label="Quantidade">
          1
        </div>
        <Button className="w-3/5">
          <Plus className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

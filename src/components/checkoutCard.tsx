import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface CheckoutCardProps {
  confirmCheckout: () => void;
}
export function CheckoutCard({ confirmCheckout }: CheckoutCardProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Finalizar compra</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Compra realizada com sucesso!</AlertDialogTitle>
          <AlertDialogDescription>
            Em breve seus produtos chegarão em sua casa.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={confirmCheckout}>Certo</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

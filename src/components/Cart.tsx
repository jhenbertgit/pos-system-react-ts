import { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import PosPageCtx from "@/contexts/pos-page-ctx";
import CartTable from "./CartTable";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const Cart = () => {
  const { cart } = useContext(PosPageCtx);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCart size={40} />
          <div className="absolute top-0 right-0">
            <Badge>
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </Badge>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your Cart</AlertDialogTitle>
          <AlertDialogDescription>
            <CartTable />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Cart;

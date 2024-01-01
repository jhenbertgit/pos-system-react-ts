import { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import PosPageCtx from "@/context/pos-page-ctx";
import { Button } from "./ui/button";

const CartTable = () => {
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const { cart, removeProduct } = useContext(PosPageCtx);

  useEffect(() => {
    let newGrandTotalAmt = 0;
    cart.forEach((cartItem) => {
      newGrandTotalAmt = newGrandTotalAmt + cartItem.totalPrice;
    });
    setGrandTotalAmt(newGrandTotalAmt);
  }, [cart]);

  return (
    <Table>
      <TableCaption>List of cart items</TableCaption>
      <TableHeader>
        <TableHead>Particulars</TableHead>
        <TableHead>Qty</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Total Price</TableHead>
        <TableHead>Action</TableHead>
      </TableHeader>
      <TableBody>
        {cart.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.product_name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>Php {item.price.toFixed(2)}</TableCell>
            <TableCell>Php {item.totalPrice.toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="destructive" onClick={() => removeProduct(item)}>
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>TOTAL AMOUNT</TableCell>
          <TableCell>Php {grandTotalAmt.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default CartTable;

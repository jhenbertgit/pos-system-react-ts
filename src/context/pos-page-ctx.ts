import { Products } from "@/types";
import { createContext } from "react";

type PosPage = {
  cart: Products[];
  addProductToCart: (args: Products) => void;
  removeProduct: (args: Products) => void;
};

const PosPageCtx = createContext<PosPage>({
  cart: [{ product_name: "", price: 0, img: "", quantity: 0, totalPrice: 0 }],
  addProductToCart: () => null,
  removeProduct: () => null,
});

export default PosPageCtx;

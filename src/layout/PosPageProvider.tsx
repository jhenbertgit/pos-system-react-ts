import PosPageCtx from "@/contexts/pos-page-ctx";
import { useCart } from "@/hooks/use-cart";
import React from "react";

type PosPageProviderProps = {
  children: React.ReactNode;
};

const PosPageProvider = ({ children }: PosPageProviderProps) => {
  const { cart, addProductToCart, removeProduct } = useCart();

  return (
    <PosPageCtx.Provider value={{ cart, addProductToCart, removeProduct }}>
      {children}
    </PosPageCtx.Provider>
  );
};

export default PosPageProvider;

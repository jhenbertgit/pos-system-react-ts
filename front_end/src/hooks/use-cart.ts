import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Products } from "../types";

export const useCart = () => {
  const [cart, setCart] = useState<Products[]>([]);
  const { toast } = useToast();

  const addProductToCart = (product: Products) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: cartItem.price * (cartItem.quantity + 1),
            }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      const newItem = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCart([...cart, newItem]);
    }
    toast({
      title: "Hey, yo!",
      description: `Successfully added ${product.product_name} to cart`,
    });
  };

  const removeProduct = (product: Products) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };
  return { cart, addProductToCart, removeProduct };
};

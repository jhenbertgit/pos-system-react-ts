import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import { Products } from "./types";
import { useState } from "react";
import PosPageCtx from "./context/pos-page-ctx";
import { useToast } from "./components/ui/use-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pos", element: <POSPage /> },
    ],
  },
]);

function App() {
  const [cart, setCart] = useState<Products[]>([]);
  const { toast } = useToast();

  const addProductToCart = (product: Products) => {
    let newItem = product;
    
    //checking if the added product exists
    const findProductInCart = cart.find((item) => {
      return item.id === product.id;
    });

    if (findProductInCart) {
      let newCart: Products[] = [];

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCart([...cart, addingProduct]);
    }
    toast({
      title: "Hey, yo!",
      description: `Successfully added ${newItem.product_name} to cart`,
    });
  };

  const removeProduct = (product: Products) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  return (
    <>
      <PosPageCtx.Provider value={{ cart, addProductToCart, removeProduct }}>
        <RouterProvider router={router} />
      </PosPageCtx.Provider>
    </>
  );
}

export default App;

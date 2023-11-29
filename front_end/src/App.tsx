import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import CartQtyContext from "@/context/cart-qty";
import { Products } from "./types";
import { useState } from "react";

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

type ProductProps = {
  cart: Products;
  setCart: () => void;
  addProductToCart: () => void;
};

function App() {
  const [cart, setCart] = useState<Products[]>([]);

  const addProductToCart = (product: Products) => {
    //check if adding product exists
    let findProductInCart = cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart: Products[] = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
      //
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
    }
  };

  return (
    <>
      <CartQtyContext.Provider value={3}>
        <RouterProvider router={router} />
      </CartQtyContext.Provider>
    </>
  );
}

export default App;

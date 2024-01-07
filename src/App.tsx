import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import PosPageCtx from "./context/pos-page-ctx";
import { useCart } from "./hooks/use-cart";
import Footer from "./components/Footer";
import { loader as posPageLoader } from "./pages/POSPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pos", loader: posPageLoader, element: <POSPage /> },
    ],
  },
]);

function App() {
  const { cart, addProductToCart, removeProduct } = useCart();

  return (
    <>
      <PosPageCtx.Provider value={{ cart, addProductToCart, removeProduct }}>
        <RouterProvider router={router} />
        <Footer />
      </PosPageCtx.Provider>
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import PosPageCtx from "./contexts/pos-page-ctx";
import { useCart } from "./hooks/use-cart";
import Footer from "./components/Footer";
import { loader as posPageLoader } from "./pages/POSPage";
import PosPageProvider from "./layout/PosPageProvider";

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
  return (
    <>
      <PosPageProvider>
        <RouterProvider router={router} />
        <Footer />
      </PosPageProvider>
    </>
  );
}

export default App;

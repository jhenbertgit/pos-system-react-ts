import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";
import Footer from "./components/Footer";
import { loader as posPageLoader } from "./pages/POSPage";
import PosPageProvider from "./layout/PosPageProvider";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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

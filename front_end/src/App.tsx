import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

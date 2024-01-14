import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-screen-lg mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default RootLayout;

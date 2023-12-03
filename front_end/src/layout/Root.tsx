import Container from "@/components/Container";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Toaster />
    </>
  );
};

export default RootLayout;

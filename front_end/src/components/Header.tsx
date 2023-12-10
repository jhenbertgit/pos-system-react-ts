import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import ModeToggle from "./ModeToggle";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import PosPageCtx from "@/context/pos-page-ctx";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import CartTable from "./CartTable";

const routes = [
  { href: "", label: "Home" },
  { href: "pos", label: "POS" },
];

const Header = () => {
  const { cart } = useContext(PosPageCtx);
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">POS</h1>
            </Link>
          </div>
          <nav className="mx-6 space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <NavLink
                key={i}
                to={route.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-medium font-bold transition-colors hover:underline underline"
                    : "text-medium font-medium transition-colors hover:underline"
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex space-x-3 items-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="relative cursor-pointer">
                  <ShoppingCart size={40} />
                  <div className="absolute top-0 right-0">
                    <Badge>
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </Badge>
                  </div>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Your Cart</AlertDialogTitle>
                  <AlertDialogDescription>
                    <CartTable />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

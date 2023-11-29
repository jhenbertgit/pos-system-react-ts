import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import ModeToggle from "./ModeToggle";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import CartQtyContext from "@/context/cart-qty";

const routes = [
  { href: "", label: "Home" },
  { href: "pos", label: "POS" },
];

const Header = () => {
  const quantity = useContext(CartQtyContext);
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link to={""}>
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
            <div className="relative">
              <ShoppingCart size={40} />
              <div className="absolute top-0 right-0">
                <Badge>{quantity}</Badge>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

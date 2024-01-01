import { Link } from "react-router-dom";
import Container from "./Container";
import ModeToggle from "./ModeToggle";
import Navigation from "./Navigation";
import Cart from "./Cart";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">POS</h1>
            </Link>
          </div>
          <Navigation />
          <div className="flex space-x-3 items-center">
            <Cart />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

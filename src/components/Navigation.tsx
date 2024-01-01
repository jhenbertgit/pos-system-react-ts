import { NavLink } from "react-router-dom";

const routes = [
  { href: "", label: "Home" },
  { href: "pos", label: "POS" },
];
const Navigation = () => {
  return (
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
  );
};

export default Navigation;

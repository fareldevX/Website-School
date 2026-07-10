import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuX, LuMenu } from "react-icons/lu";
import { navItems } from "../../constant/data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-5">
      <div className="container flex items-center justify-between">
        <Link className="font-medium text-base lg:text-lg">
          SMK Negeri 1 Adiwerna
        </Link>

        <div className={`navbar ${isOpen ? "active" : ""} lg:hidden z-50`}>
          <button className="absolute top-6 right-6" onClick={toggleMenu}>
            <LuX size={20} />
          </button>

          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="font-medium hover:text-orange-50 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="btn-primary mt-6 font-medium">Login</button>
        </div>

        <button className="lg:hidden" onClick={toggleMenu}>
          <LuMenu size={20} />
        </button>

        <div className="max-lg:hidden flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="font-medium hover:text-orange-50 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuX, LuMenu } from "react-icons/lu";
import { navItems } from "../../constant/data";

import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 70);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 z-50 ${isActive ? "bg-white/75 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0" : "static bg-transparent border-b border-transparent"} transition-all duration-300`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        <div className={`navbar ${isOpen ? "active" : ""} lg:hidden z-50`}>
          <button className="absolute top-6 right-6" onClick={toggleMenu}>
            <LuX size={24} className="text-gray-700" />
          </button>

          <nav className="flex flex-col items-center gap-5 mt-16">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors text-lg"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="btn-primary mt-8 font-medium w-4/5">Login</button>
        </div>

        <button className="lg:hidden p-2 text-gray-700" onClick={toggleMenu}>
          <LuMenu size={24} />
        </button>

        <div className="max-lg:hidden flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm lg:text-base">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="font-medium text-gray-600 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="btn-primary px-6 py-2.5 text-sm font-semibold transition-all duration-200">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

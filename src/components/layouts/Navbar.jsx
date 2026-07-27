import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { LuX, LuMenu } from "react-icons/lu";
import { navItems } from "../../constant/data";
import {
  LuMoon,
  LuSun,
  LuSparkles,
  LuUserPlus,
  LuBookOpen,
  LuBriefcase,
  LuGraduationCap,
} from "react-icons/lu";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

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
      className={`py-4 z-50 ${isActive ? "bg-white/75 dark:bg-dark-card/75 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-dark-border sticky top-0" : "static bg-transparent border-b border-transparent"} transition-all duration-300`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
          />
        </Link>

        <div className={`navbar ${isOpen ? "active" : ""} lg:hidden z-50`}>
          <button
            className="absolute top-6 left-6 text-gray-600 dark:text-dark-text-muted hover:text-orange-50 dark:hover:text-dark-text-main transition-colors duration-300"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <LuSun size={24} /> : <LuMoon size={24} />}
          </button>

          <button
            className="absolute top-6 right-6 text-gray-600 dark:text-dark-text-muted hover:text-orange-50 dark:hover:text-dark-text-main transition-colors duration-300"
            onClick={toggleMenu}
          >
            <LuX size={24} />
          </button>

          <nav className="flex flex-col items-center gap-4 mt-16">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative font-medium ${isActive ? "text-orange-500 dark:text-white" : "hover:text-orange-500 dark:hover:text-dark-text-main"} text-gray-700 dark:text-dark-text-muted transition-colors text-lg`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="btn-primary mt-8 font-medium w-2/5">Login</button>
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
                className={({ isActive }) =>
                  `relative font-medium ${isActive ? "text-orange-500 dark:text-white after:bg-orange-500 dark:after:bg-white after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.75" : "hover:text-orange-500 dark:hover:text-dark-text-main"} text-gray-700 dark:text-dark-text-muted transition-colors text-base pb-1.5`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-orange-500 dark:text-dark-text-muted dark:hover:text-white transition-colors text-base pb-1.5">
                Layanan Siswa
              </button>

              <div className="absolute top-full -left-40 hidden group-hover:block w-145 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 z-50 transition-all duration-200">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-orange-500">
                  <LuSparkles size={14} />
                  <span>Layanan & Fasilitas Utama</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/ppdb"
                    className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-100/60 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  >
                    <div className="p-2.5 bg-orange-500/70 dark:bg-orange-950/40 text-white dark:text-orange-400 rounded-xl group-hover/item:scale-105 transition-transform">
                      <LuUserPlus size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-white group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors">
                        PPDB
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                        Informasi pendaftaran, alur, & syarat penerimaan siswa
                        baru.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/fasilitas"
                    className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-100/60 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  >
                    <div className="p-2.5 bg-orange-500/70 dark:bg-orange-950/40 text-white dark:text-orange-400 rounded-xl group-hover/item:scale-105 transition-transform">
                      <LuBookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-white group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors">
                        Fasilitas Belajar
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                        Sarana laboratorium, perpustakaan, & ruang praktik
                        modern.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/bkk"
                    className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-100/60 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  >
                    <div className="p-2.5 bg-orange-500/70 dark:bg-orange-950/40 text-white dark:text-orange-400 rounded-xl group-hover/item:scale-105 transition-transform">
                      <LuBriefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-white group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors">
                        BKK (Bursa Kerja)
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                        Layanan penyaluran kerja alumni & kemitraan dunia
                        industri.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/prestasi"
                    className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-100/60 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  >
                    <div className="p-2.5 bg-orange-500/70 dark:bg-orange-950/40 text-white dark:text-orange-400 rounded-xl group-hover/item:scale-105 transition-transform">
                      <LuGraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-white group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors">
                        Prestasi Siswa
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                        Catatan pencapaian & kejuaraan yang diraih para siswa.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <button className="btn-primary px-6 py-2.5 text-sm font-semibold transition-all duration-200">
            Login
          </button>

          <button
            className="text-gray-600 dark:text-dark-text-muted hover:text-orange-50 dark:hover:text-dark-text-main transition-colors duration-300"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import { navItems, socialMedia, quickLinks } from "../../constant/data";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="mt-24 pt-16 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border transition-colors">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-100 dark:border-dark-border pb-12 transition-colors">
          <div className="space-y-6">
            <Link to="/">
              <img
                src={logo}
                alt="Logo SMK Negeri 1 Adiwerna"
                className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
              />
            </Link>

            <p className="text-sm text-gray-500 dark:text-dark-text-muted leading-relaxed transition-colors mt-6">
              Mewujudkan lembaga pendidikan vokasi yang berkarakter, unggul, dan
              menghasilkan lulusan yang siap bersaing di era digital global.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialMedia.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.id}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-gray-800 text-gray-650 dark:text-dark-text-main border border-gray-200/50 dark:border-dark-border hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white rounded-xl cursor-pointer transition-all duration-250 hover:-translate-y-0.5"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-dark-text-main transition-colors uppercase tracking-wider mb-6">
              Navigasi
            </h4>

            <div className="flex flex-col gap-3.5">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-sm text-gray-500 dark:text-dark-text-muted hover:text-orange-500 dark:hover:text-dark-text-main transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-dark-text-main transition-colors uppercase tracking-wider mb-6">
              Layanan Siswa
            </h4>
            <div className="flex flex-col gap-3.5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-sm text-gray-500 dark:text-dark-text-muted hover:text-orange-500 dark:hover:text-dark-text-main transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-dark-text-main transition-colors uppercase tracking-wider mb-6">
              Kontak Kami
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LuMapPin
                  className="text-orange-500 shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-gray-500 dark:text-dark-text-muted leading-relaxed">
                  JL. RAYA 2 PO BOX 2 ADIWERNA, Pesarean, Kec. Adiwerna, Kab.
                  Tegal, Jawa Tengah
                </p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-gray-100 dark:border-dark-border/40">
                <a
                  href="mailto:support@webland.id"
                  className="flex items-center gap-3 text-sm text-gray-500 dark:text-dark-text-muted hover:text-orange-500 dark:hover:text-dark-text-main transition-colors"
                >
                  <LuMail className="text-orange-500" size={16} />
                  support@smkn1adiwerna.id
                </a>
                <a
                  href="tel:+628123456789"
                  className="flex items-center gap-3 text-sm text-gray-500 dark:text-dark-text-muted hover:text-orange-500 dark:hover:text-dark-text-main transition-colors"
                >
                  <LuPhone className="text-orange-500" size={16} />
                  +62 8123456789
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4 text-xs text-gray-500 dark:text-dark-text-muted transition-colors">
          <span className="text-center sm:text-left">
            © 2026 SMK Negeri 1 Adiwerna. Seluruh hak cipta dilindungi
            undang-undang.
          </span>

          <div className="flex items-center gap-5 font-medium">
            <Link
              to="/privacy"
              className="hover:text-orange-500 dark:hover:text-dark-text-main transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              to="/terms"
              className="hover:text-orange-500 dark:hover:text-dark-text-main transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

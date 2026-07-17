import RawMarquee from "react-fast-marquee";
import { clients, statsData } from "../../constant/data";

const Marquee = RawMarquee?.default ?? RawMarquee;

function Hero() {
  return (
    <section className="bg-gray-50/50 dark:bg-dark-bg/50 py-16 md:py-24 overflow-hidden transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-dark-text-main tracking-tight max-w-4xl leading-tight md:leading-tight transition-colors">
            Selamat Datang di{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              SMKN 1 Adiwerna
            </span>{" "}
            Pusat Keunggulan Pendidikan Vokasi Berwawasan Lingkungan.
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-dark-text-muted max-w-2xl leading-relaxed transition-colors">
            Menghadirkan pendidikan kejuruan berkualitas tinggi untuk
            menjembatani talenta muda berbakat menuju industri global dan masa
            depan yang berkelanjutan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="btn-primary w-[85%] sm:w-auto px-8 py-3.5 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-250 text-sm md:text-base">
              Jelajahi Jurusan
            </button>
            <button className="btn-secondary w-[85%] sm:w-auto px-8 py-3.5 text-gray-700 font-medium rounded-lg shadow-sm transition-all duration-250 text-sm md:text-base">
              PPDB Online
            </button>
          </div>

          <div className="mt-16 w-full max-w-5xl relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-dark-text-muted mb-6">
              Bekerja Sama Dengan Industri Terkemuka
            </p>

            <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-gray-50 dark:before:from-dark-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-gray-50 dark:after:from-dark-bg after:to-transparent transition-colors duration-300">
              <Marquee pauseOnHover={true} speed={40}>
                {clients.map((client) => (
                  <div
                    className="px-10 py-4 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                    key={client.id}
                  >
                    <img
                      src={client.img}
                      alt="Logo Client"
                      className="h-8 md:h-10 w-auto object-contain brightness-0 dark:invert hover:brightness-100 dark:hover:invert-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <div className="mt-16 w-full max-w-5xl py-10 px-6 bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center items-center divide-x-0 sm:divide-x divide-gray-100 dark:divide-dark-border">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center space-y-1"
                >
                  <span className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-gray-900 dark:from-dark-text-main to-gray-700 dark:to-white bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-dark-text-muted tracking-normal max-w-37.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

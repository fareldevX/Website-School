import RawMarquee from "react-fast-marquee";
import { clients, statsData } from "../../constant/data";

const Marquee = RawMarquee?.default ?? RawMarquee;

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="mt-12.5 md:mt-20 text-center">
          <h1 className="text-2xl md:text-4xl">
            Selamat Datang di{" "}
            <span className="text-orange-50">SMKN 1 Adiwerna</span> Pusat
            Keunggulan Pendidikan Vokasi Berwawasan Lingkungan.
          </h1>

          <p className="mt-4">
            Menghadirkan pendidikan kejuruan berkualitas tinggi untuk
            menjembatani talenta muda berbakat menuju industri global dan masa
            depan yang berkelanjutan.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <button className="btn-primary max-sm:w-[80%]">
              Jelajahi Jurusan
            </button>
            <button className="btn-secondary max-sm:w-[80%]">
              PPDB Online
            </button>
          </div>

          <div className="mt-8 lg:mt-25 relative overflow-hidden">
            <Marquee pauseOnHover={true}>
              {clients.map((client) => (
                <div className="px-14 py-5" key={client.id}>
                  <img
                    src={client.img}
                    alt="Logo Client"
                    width={74}
                    height={28}
                  />
                </div>
              ))}
            </Marquee>

            <div className="absolute top-0 left-0 bg-linear-to-r from-white-97 via-white-97/80 to-transparent w-24 h-full z-10" />
            <div className="absolute top-0 right-0 bg-linear-to-l from-white-97 via-white-97/80 to-transparent w-24 h-full z-10" />
          </div>

          <div className="mt-8 lg:mt-25 py-12 px-6 bg-white rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <span className="text-5xl md:text-6xl font-semibold tracking-wide">
                    {stat.value}
                  </span>
                  <span className="text-sm md:text-base font-light tracking-normal opacity-90 max-w-[200px]">
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

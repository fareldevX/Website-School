import { LuStar, LuCheck } from "react-icons/lu";
import AboutImg from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="mt-8 md:mt-14">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative p-3 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <img
              src={AboutImg}
              alt="About Image"
              className="w-full h-87.5 md:h-112.5 object-cover rounded-xl"
            />

            <div className="absolute bottom-0 left-0 right-0 lg:bottom-8 lg:left-8 lg:right-auto z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
              <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-lg">
                <LuStar size={24} />
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase font-medium tracking-wider">
                  Akreditasi
                </p>
                <p className="text-sm font-bold text-gray-800">
                  Bintang 5 & Terakreditasi A
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 block">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Membentuk Generasi Unggul, Berkarakter, dan Siap Kerja
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed text-justify">
              SMK Negeri 1 Adiwerna berkomitmen untuk menyelenggarakan
              pendidikan vokasi terbaik yang menyelaraskan kurikulum sekolah
              dengan kebutuhan industri modern. Kami fokus membekali peserta
              didik dengan keterampilan teknis mendalam serta karakter berbudaya
              industri yang disiplin dan inovatif.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <LuCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-800">
                    Fasilitas Standar Industri
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    Bengkel dan laboratorium lengkap berbasis Teaching Factory
                    (Tefa).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <LuCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-800">
                    Kemitraan Luas
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    Bekerja sama erat dengan berbagai perusahaan nasional
                    terkemuka.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <LuCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-800">
                    Kurikulum Adaptif
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    Pembelajaran berbasis teknologi dan penalaran tingkat tinggi
                    (HOTS).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <LuCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-800">
                    Lingkungan Eco School
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    Suasana belajar yang asri, nyaman, dan berwawasan
                    lingkungan.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button className="btn-primary font-medium">
                Pelajari Selengkapnya
              </button>
              <a href="/kontak" className="btn-secondary font-medium">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useParams, Link } from "react-router-dom";
import { programs } from "../../constant/data";
import {
  LuArrowLeft,
  LuCpu,
  LuBookOpen,
  LuCheck,
  LuBriefcase,
} from "react-icons/lu";

function ProgramDetail() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-dark-bg/50 pb-16">
      <section className="py-16 md:py-20 bg-linear-to-br from-[#0d1323] to-[#111a31] text-white border border-slate-800">
        <div className="container">
          <div className="space-y-6">
            <Link
              to="/program-keahlian"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <LuArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              Kembali ke Program keahlian
            </Link>

            <div className="space-y-4">
              <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-md shadow-sm bg-blue-600 text-white uppercase tracking-wider">
                {program.shortTitle}
              </span>
              <h1 className="text-3xl md:text-5xl max-w-3xl font-extrabold tracking-tight leading-tight">
                {program.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-4 transition-colors">
                <h2 className="text-xl font-bold text-gray-950 dark:text-dark-text-main flex items-center gap-2.5 transition-colors">
                  <span className="p-2 bg-blue-50 text-[#1d4ed8] rounded-lg">
                    <LuCpu size={20} />
                  </span>
                  Deskripsi Kompetensi Keahlian
                </h2>
                <p className="text-gray-650 dark:text-dark-text-muted leading-relaxed text-justify text-sm md:text-base transition-colors">
                  {program.desc}
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-6 transition-colors">
                <h2 className="text-xl font-bold text-gray-950 dark:text-dark-text-main flex items-center gap-2.5 transition-colors">
                  <span className="p-2 bg-blue-50 text-[#1d4ed8] rounded-lg">
                    <LuBookOpen size={20} />
                  </span>
                  Materi & Keahlian Utama
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-dark-border transition-colors">
                    <LuCheck
                      className="text-green-600 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-dark-text-muted transition colors">
                      Dasar-Dasar Kejuruan Kompetensi
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-dark-border transition-colors">
                    <LuCheck
                      className="text-green-600 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-dark-text-muted transition-colors">
                      Praktik Kerja Lapangan (PKL)
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-dark-border transition-colors">
                    <LuCheck
                      className="text-green-600 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-dark-text-muted transition-colors">
                      Implementasi Budaya Kerja Industri
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-dark-border transition-colors">
                    <LuCheck
                      className="text-green-600 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-dark-text-muted transition-colors">
                      Uji Kompetensi Keahlian (UKK)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-4 transition-colors">
                <h2 className="text-lg font-bold text-gray-950 dark:text-dark-text-main flex items-center gap-2.5 border-b border-gray-100 dark:border-dark-border pb-3 transition-colors">
                  <span className="p-2 bg-orange-100 text-orange-500 rounded-lg">
                    <LuBriefcase size={18} />
                  </span>
                  Prospek Kerja Lulusan
                </h2>

                <div className="flex flex-col gap-2">
                  {program.prospek.map((karir, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 bg-linear-to-r from-slate-50 to-white dark:from-gray-900 dark:to-dark-bg border border-slate-150/60 dark:border-dark-border rounded-xl font-semibold text-sm text-gray-700 dark:text-dark-text-muted hover:border-[#1d4ed8]/30 dark:hover:border-dark-border/30 hover:shadow-sm transition-all duration-200"
                    >
                      {karir}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-[#1d4ed8] to-blue-800 p-6 rounded-2xl text-white shadow-lg shadow-blue-700/10 space-y-4">
                <h3 className="font-bold text-lg">
                  Tertarik dengan Jurusan ini?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Bergabunglah menjadi bagian dari komitmen mutu pendidikan
                  vokasi unggulan kami.
                </p>
                <Link
                  to="/kontak"
                  className="block text-center text-sm font-bold bg-white text-[#1d4ed8] hover:bg-blue-50 py-2.5 rounded-xl shadow-md transition-colors"
                >
                  Tanyakan Informasi PPDB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProgramDetail;

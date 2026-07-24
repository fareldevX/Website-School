import { useState } from "react";
import { Link } from "react-router-dom";
import BannerPage from "../../components/common/BannerPage";
import { programs } from "../../constant/data";
import {
  LuSearch,
  LuUsers,
  LuBuilding,
  LuAward,
  LuCircleHelp,
} from "react-icons/lu";

function SkillProgram() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = programs.filter(
    (prog) =>
      prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.shortTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.desc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white-97 dark:bg-dark-bg text-gray-800 dark:text-dark-text-main pb-20">
      <BannerPage
        tag="Program Keahlian"
        title="Pilihan Jurusan Unggulan Masa Depan"
        description="Pilih dari 11 Program Keahlian berstandar industri yang dirancang untuk membekali siswa dengan keterampilan praktis dan siap kerja."
      />

      <section className="max-w-6xl mx-auto px-4 -mt-6 mb-12 relative z-20">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="inline-flex p-2.5 bg-orange-100 dark:bg-orange-950/40 rounded-xl text-orange-500 mb-1">
              <LuBuilding size={24} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              11
            </h3>
            <p className="text-xs text-gray-500">Program Keahlian</p>
          </div>
          <div className="space-y-1">
            <div className="inline-flex p-2.5 bg-orange-100 dark:bg-orange-950/40 rounded-xl text-orange-500 mb-1">
              <LuUsers size={24} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              2.500+
            </h3>
            <p className="text-xs text-gray-500">Siswa Aktif</p>
          </div>
          <div className="space-y-1">
            <div className="inline-flex p-2.5 bg-orange-100 dark:bg-orange-950/40 rounded-xl text-orange-500 mb-1">
              <LuAward size={24} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              50+
            </h3>
            <p className="text-xs text-gray-500">Mitra Industri (DUDI)</p>
          </div>
          <div className="space-y-1">
            <div className="inline-flex p-2.5 bg-orange-100 dark:bg-orange-950/40 rounded-xl text-orange-500 mb-1">
              <LuCircleHelp size={24} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              95%
            </h3>
            <p className="text-xs text-gray-500">Tingkat Penyerapan Kerja</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="relative max-w-md mx-auto">
          <LuSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari jurusan atau kata kunci (misal: TJKT, Otomotif)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => {
              const IconComponent = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="bg-[#FFF6E9] dark:bg-orange-950/20 rounded-xl p-8 relative flex items-center justify-center mb-6">
                      <span className="absolute top-3 left-3 bg-white dark:bg-gray-800 text-orange-600 font-bold text-xs px-3 py-1 rounded-md shadow-xs border border-orange-100 dark:border-transparent">
                        {prog.shortTitle}
                      </span>

                      <div className="bg-orange-500 text-white p-3.5 rounded-xl shadow-md shadow-orange-500/20">
                        <IconComponent size={32} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6">
                      {prog.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {prog.prospek.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FFF6E9] dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/program-keahlian/${prog.slug}`}
                      className="w-full inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition text-sm shadow-md shadow-orange-500/20"
                    >
                      Lihat Detail Jurusan
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Jurusan yang Anda cari tidak ditemukan.
            </p>
          </div>
        )}
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Bingung Memilih Jurusan?
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-dark-card p-5 rounded-xl border border-gray-100 dark:border-dark-border">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Bagaimana cara menentukan jurusan yang cocok?
            </h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Kamu bisa memilih berdasarkan minat utama (misal: teknologi
              komputer, otomotif, atau seni visual) dan melihat prospek lulusan
              yang tertera di masing-masing card jurusan.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-5 rounded-xl border border-gray-100 dark:border-dark-border">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Apakah bisa berpindah jurusan setelah diterima?
            </h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Pemilihan jurusan bersifat final setelah tes seleksi pendaftaran
              PPDB. Pastikan kamu telah berkonsultasi dengan orang tua sebelum
              mendaftar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillProgram;

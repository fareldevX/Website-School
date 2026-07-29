import { useState } from "react";
import BannerPage from "../../components/common/BannerPage";
import { jobListings, partnerCompanies } from "../../constant/data";
import {
  LuBriefcase,
  LuBuilding2,
  LuUsers,
  LuMapPin,
  LuCalendar,
  LuSearch,
  LuExternalLink,
  LuCircleCheck,
  LuArrowRight,
} from "react-icons/lu";

function Bkk() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Semua");

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "Semua" ? true : job.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-white-97 dark:bg-dark-bg text-gray-800 dark:text-gray-100 pb-20">
      <BannerPage
        tag="Bursa Kerja Khusus (BKK)"
        title="Jembatan Karir & Kemitraan Industri"
        description="Layanan penyaluran kerja, informasi rekrutmen alumni, serta pelatihan kesiapan kerja menuju Dunia Usaha & Dunia Industri (DUDI)."
      />

      <div className="max-w-6xl mx-auto px-4 -mt-6 space-y-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuUsers size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                85%+
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Alumni Terserap Kerja
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuBuilding2 size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                50+
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mitra Perusahaan (DUDI)
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuBriefcase size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                120+
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Lowongan Terpasang/Thn
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuCircleCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                Terakreditasi
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Layanan BKK Resmi
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Lowongan Kerja & Rekrutmen Aktif
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Temukan peluang karir terbaru dari industri mitra BKK SMKN 1
                Adiwerna.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-64">
                <LuSearch
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Cari posisi / perusahaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>

              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                {[
                  "Semua",
                  "Full Time",
                  "Rekrutmen Khusus BKK",
                  "Magang / PKL",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                      selectedType === type
                        ? "bg-orange-500 text-white"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-orange-500/50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm p-6 flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2.5 py-1 bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 rounded-full text-[10px] font-bold">
                        {job.type}
                      </span>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <LuCalendar size={12} /> s/d {job.deadline}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-xs font-semibold text-orange-500 mt-0.5">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <LuMapPin size={14} className="shrink-0 text-gray-400" />
                      <span>{job.location}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700/60 space-y-1">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Kualifikasi Utama:
                      </p>
                      {job.requirements.map((req, idx) => (
                        <p
                          key={idx}
                          className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                          <span className="truncate">{req}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/6285888081802?text=Halo%20Admin%20BKK,%20saya%20ingin%20mendaftar%20lowongan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 hover:bg-orange-500 dark:hover:bg-orange-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition duration-200"
                  >
                    <span>Lamar Melalui BKK</span>
                    <LuExternalLink size={14} />
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-white dark:bg-gray-800 p-8 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500">
                  Tidak ada lowongan yang cocok dengan kata kunci/filter Anda.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white dark:bg-dark-card p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Mitra Industri & Perusahaan DUDI
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SMKN 1 Adiwerna bekerjasama dengan berbagai industri manufaktur,
              otomotif, dan teknologi terkemuka.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerCompanies.map((partner, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-center text-center font-bold text-xs text-gray-700 dark:text-gray-300 hover:border-orange-500/40 transition"
              >
                {partner}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold">
              Kamu Alumni SMKN 1 Adiwerna?
            </h3>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl">
              Daftarkan diri kamu ke database penelusuran tamatan (Tracer Study)
              BKK untuk mendapatkan prioritas rekrutmen kerja dan informasi
              pelatihan karir.
            </p>
          </div>
          <a
            href="https://wa.me/6285888081802?text=Halo%20BKK,%20saya%20alumni%20ingin%20mendaftar%20database"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm transition duration-200 shadow-lg shadow-orange-500/20 flex items-center gap-2"
          >
            <span>Daftar Database Alumni</span>
            <LuArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bkk;

import { useState } from "react";
import { workflow, requirements } from "../../constant/data";
import BannerPage from "../../components/common/BannerPage";
import { LuCalendar, LuCheck, LuCircleHelp, LuSend } from "react-icons/lu";

function PPDB() {
  const [formData, setFormData] = useState({
    fullName: "",
    NISN: "",
    schoolOrigin: "",
    majorChoice: "teknik-jaringan-komputer-telekomunikasi",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white-97 dark:bg-dark-bg pb-20 transition-colors">
      <BannerPage
        tag="Tahun Ajaran 2026/2027"
        title="Penerimaan Peserta Didik Baru (PPDB)"
        description="Bergabunglah menjadi bagian dari SMK Negeri 1 Adiwerna. Wujudkan cita-citamu menjadi tenaga ahli profesional yang siap bersaing di dunia industri modern."
        buttons={[
          {
            text: "Isi Formulir",
            href: "#form-pendaftaran",
            variant: "primary",
            showIcon: true,
          },
          { text: "Lihat Syarat", href: "#persyaratan", variant: "secondary" },
        ]}
      />

      <div className="container mt-6 space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-2 h-full bg-blue-600 absolute left-0 top-0"></div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Gelombang 1
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text-main mt-2">
              Jalur Prestasi & Kemitraan
            </h3>
            <div className="text-gray-500 dark:text-dark-text-muted space-y-1 mt-4">
              <p className="text-xs flex items-center gap-1.5">
                <LuCalendar /> 1 Februari - 31 Maret 2026
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                Bebas Biaya Pendaftaran
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-2 h-full bg-orange-500 absolute left-0 top-0"></div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
              Gelombang 2
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text-main mt-2">
              Jalur Reguler / Tes
            </h3>
            <div className="text-gray-500 dark:text-dark-text-muted space-y-1 mt-4">
              <p className="text-xs flex items-center gap-1.5">
                <LuCalendar /> 1 April - 30 Mei 2026
              </p>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Tes Potensi Akademik & Minat
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="w-2 h-full bg-slate-400 absolute left-0 top-0"></div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Gelombang 3
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text-main mt-2">
              Jalur Pemenuhan Kuota
            </h3>
            <div className="text-gray-500 dark:text-dark-text-muted space-y-1 mt-4">
              <p className="text-xs flex items-center gap-1.5">
                <LuCalendar /> 1 Juni - 15 Juli 2026
              </p>
              <p className="text-sm font-semibold text-gray-500">
                *Apabila Kuota Masih Tersedia
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-text-main">
              Alur Pendaftaran PPDB
            </h2>
            <p className="text-sm text-gray-500 dark:text-dark-text-muted">
              Ikuti 4 langkah mudah berikut untuk menyelesaikan proses
              pendaftaran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl relative space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl">
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-black text-gray-200 dark:text-slate-700">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-dark-text-main text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-dark-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div
          className="scroll-mt-24 md:scroll-mt-34 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          id="persyaratan"
        >
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main border-b border-gray-100 dark:border-dark-border pb-4">
                Persyaratan Berkas
              </h3>

              <div className="space-y-4">
                {requirements.map((require, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCheck
                      className="text-green-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-xs md:text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed">
                      {require}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 p-4 bg-orange-100 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-2xl space-y-2">
                <h4 className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                  <LuCircleHelp size={16} /> Butuh Bantuan Pendaftaran?
                </h4>
                <p className="text-xs text-orange-800/80 dark:text-orange-300/80 leading-relaxed">
                  Tim Sekretariat PPDB siap membantu Anda setiap hari kerja
                  (Senin - Jumat, 08.00 - 15.00 WIB) melalui WhatsApp Hotline:{" "}
                  <strong>+62 858-8808-1802</strong>.
                </p>
              </div>
            </div>
          </div>

          <div
            className="scroll-mt-22 md:scroll-mt-34 lg:col-span-7"
            id="form-pendaftaran"
          >
            <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text-main">
                  Formulir Pendaftaran Awal
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-dark-text-muted mt-1">
                  Isi data singkat berikut untuk memesan kuota pendaftaran awal.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-2xl space-y-4">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-300">
                    Pendaftaran Berhasil!
                  </h4>
                  <p className="text-xs md:text-sm text-green-700 dark:text-green-400 max-w-md mx-auto">
                    Terima kasih telah mendaftar. Data Anda telah kami terima.
                    Tim kami akan menghubungi Anda melalui WhatsApp untuk
                    petunjuk verifikasi berkas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-green-700 dark:text-green-300 underline pt-2"
                  >
                    Kirim formulir baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-dark-text-muted mb-1">
                      Nama Lengkap Calon Siswa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama sesuai ijazah"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text-main focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-dark-text-muted mb-1">
                        NISN (Nomor Induk Siswa Nasional)
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="10 digit NISN"
                        value={formData.NISN}
                        onChange={(e) =>
                          setFormData({ ...formData, NISN: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text-main focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-dark-text-muted mb-1">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text-main focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-dark-text-muted mb-1">
                      Asal Sekolah (SMP / MTs)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: SMP Negeri 1 Adiwerna"
                      value={formData.schoolOrigin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          schoolOrigin: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text-main focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-dark-text-muted mb-1">
                      Pilihan Program Keahlian Utama
                    </label>
                    <select
                      value={formData.majorChoice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          majorChoice: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text-main focus:outline-none focus:border-blue-600"
                    >
                      <option value="teknik-jaringan-komputer-telekomunikasi">
                        Teknik Jaringan Komputer & Telekomunikasi (TJKT)
                      </option>
                      <option value="teknik-otomotif">
                        Teknik Otomotif (TO)
                      </option>
                      <option value="teknik-pemesinan">
                        Teknik Pemesinan (TP)
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 pt-3"
                  >
                    <LuSend size={18} /> Kirim Formulir Pendaftaran
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PPDB;

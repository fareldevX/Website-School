import { useState } from "react";
import BannerPage from "../../components/common/BannerPage";
import {
  LuMapPin,
  LuPhoneCall,
  LuMail,
  LuClock,
  LuSend,
  LuCircleCheck,
  LuArrowRight,
} from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", emailOrPhone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white-97 dark:bg-dark-bg text-gray-800 dark:text-dark-text-main pb-20">
      <BannerPage
        tag="Hubungi Kami"
        title="Kami Siap Membantu Anda"
        description="Punya pertanyaan seputar pendaftaran siswa baru, program keahlian, atau kerja sama industri? Silakan hubungi kami melalui formulir atau kontak di bawah ini."
      />

      <div className="max-w-6xl mx-auto px-4 -mt-6 space-y-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main mb-2">
                  Informasi Sekolah
                </h3>
                <p className="text-xs text-gray-500 dark:text-dark-text-muted leading-relaxed">
                  Tim Layanan Informasi & Sekretariat PPDB SMKN 1 Adiwerna siap
                  memberikan informasi secara transparan dan responsif.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl shrink-0">
                    <LuMapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Alamat Kampus
                    </h4>
                    <p className="text-sm font-medium leading-snug">
                      Jl. Raya Pohtran №1, PO Box 2, Adiwerna, Kab. Tegal, Jawa
                      Tengah 52194
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl shrink-0">
                    <LuPhoneCall size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Telepon / WhatsApp
                    </h4>
                    <p className="text-sm font-medium">
                      +62 858-8808-1802{" "}
                      <span className="text-xs text-orange-500 font-bold">
                        (PPDB)
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      (0283) 443768 (Kantor)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl shrink-0">
                    <LuMail size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Email Resmi
                    </h4>
                    <p className="text-sm font-medium">
                      smkn1adiwerna@yahoo.co.id
                    </p>
                    <p className="text-xs text-gray-500">
                      info@smkn1adiwerna.sch.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl shrink-0">
                    <LuClock size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Jam Layanan
                    </h4>
                    <p className="text-sm font-medium">
                      Senin - Jumat: 07.30 - 15.30 WIB
                    </p>
                    <p className="text-xs text-gray-500">
                      Sabtu, Minggu & Hari Libur Nasional: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main mb-1">
                  Kirim Pesan
                </h3>
                <p className="text-xs text-gray-500 dark:text-dark-text-muted">
                  Isi formulir di bawah ini dan tim kami akan membalas
                  pertanyaan Anda secepatnya.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-green-`00 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400 text-sm">
                  <LuCircleCheck size={24} className="shrink-0" />
                  <div>
                    <h5 className="font-bold">Pesan Berhasil Terkirim!</h5>
                    <p className="text-xs text-green-600 dark:text-green-500">
                      Terima kasih telah menghubungi kami. Tim kami akan segera
                      menanggapi tanggapan Anda.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        Email / No. WhatsApp{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 0812xxxx / email@domain.com"
                        value={formData.emailOrPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emailOrPhone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      Subjek Pertanyaan <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition"
                    >
                      <option value="">-- Pilih Topik --</option>
                      <option value="PPDB">Informasi Pendaftaran (PPDB)</option>
                      <option value="Jurusan">
                        Pertanyaan Program Keahlian / Jurusan
                      </option>
                      <option value="Kerjasama">
                        Kerja Sama Industri / Prakerin (PKL)
                      </option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      Pesan Anda <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pertanyaan atau kendala Anda di sini..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-orange-500/20 text-sm transition duration-200"
                  >
                    <LuSend size={16} /> Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main">
                Lokasi Sekolah
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Kunjungi gedung SMKN 1 Adiwerna secara langsung melalui petunjuk
                arah peta di bawah.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=SMK+Negeri+1+Adiwerna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:underline"
            >
              Buka di Google Maps
              <LuArrowRight size={16} />
            </a>
          </div>

          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border shadow-sm bg-white dark:bg-dark-card p-4 mt-6">
            <iframe
              title="Peta Lokasi SMK Negeri 1 Adiwerna"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.551696000109!2d109.13541767586523!3d-6.944062093056024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9ea94056157%3A0xb3bd6a09ad1ca292!2sSMK%20Negeri%201%20Adiwerna!52s0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;

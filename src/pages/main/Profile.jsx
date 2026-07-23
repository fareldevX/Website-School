import BannerPage from "../../components/common/BannerPage";
import { missions, values } from "../../constant/data";
import {
  LuTarget,
  LuCompass,
  LuUsers,
  LuCheck,
  LuHistory,
} from "react-icons/lu";

function Profile() {
  return (
    <main className="min-h-screen bg-white-97 dark:bg-dark-bg pb-20 transition-colors">
      <BannerPage
        tag="Tentang Kami"
        title="Profil SMK Negeri 1 Adiwerna"
        description="Membentuk generasi vokasi yang unggul, berkarakter, dan berdaya saing tinggi di industri nasional maupun global."
      />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 space-y-16">
        <section className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 md:p-10 rounded-3xl shadow-sm transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-60 md:w-full md:h-72 bg-linear-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-dark-border shadow-md flex items-center justify-center">
                <div className="text-center p-4 space-y-2 text-gray-400 dark:text-gray-500">
                  <LuUsers size={48} className="mx-auto" />
                  <span className="text-xs block font-medium">
                    Foto Kepala Sekolah
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                  Sambutan Kepala Sekolah
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text-main">
                  Selamat Datang di SMK Negeri 1 Adiwerna
                </h2>
              </div>

              <div className="text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed space-y-3 text-justify">
                <p>
                  Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas
                  terwujudnya media informasi resmi ini. Pendidikan vokasi saat
                  ini memegang peranan krusial dalam mencetak SDM yang tidak
                  hanya cakap secara akademis, namun juga mahir secara teknis.
                </p>
                <p>
                  Dengan dukungan fasilitas praktikum berstandar industri dan
                  kurikulum yang tersinkronisasi bersama mitra dunia kerja, kami
                  berkomitmen menghantarkan peserta didik menjadi lulusan yang
                  siap bekerja, melanjutkan studi, maupun berwirausaha.
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 dark:border-dark-border/50">
                <h4 className="font-bold text-sm text-gray-900 dark:text-dark-text-main">
                  Kepala Sekolah SMK Negeri 1 Adiwerna
                </h4>
                <p className="text-xs text-gray-500 dark:text-dark-text-muted">
                  NIP. 19700101 199512 1 001
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 rounded-3xl shadow-sm space-y-4 transition-colors">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
              <LuTarget size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main">
              Visi Sekolah
            </h3>
            <p className="text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed italic border-l-4 border-blue-600 pl-4 py-1">
              "Menjadi pusat pendidikan dan pelatihan vokasi yang unggul,
              berkarakter mulia, berwawasan lingkungan, serta menghasilkan
              lulusan yang kompeten di era global."
            </p>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 rounded-3xl shadow-sm space-y-4 transition-colors">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-2xl flex items-center justify-center">
              <LuCompass size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main">
              Misi Sekolah
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-gray-600 dark:text-dark-text-muted">
              {missions.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <LuCheck
                    className="text-orange-500 mt-0.5 shrink-0"
                    size={16}
                  />
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 md:p-10 rounded-3xl shadow-sm space-y-4 transition-colors">
          <div className="flex items-center gap-3 border-b border-gray-100 dark:border-dark-border pb-4">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
              <LuHistory size={22} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text-main">
              Sejarah Singkat
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed text-justify">
            SMK Negeri 1 Adiwerna didirikan untuk menjawab kebutuhan tenaga
            kerja terampil di bidang rekayasa dan teknologi. Berawal dari
            beberapa program keahlian dasar, sekolah terus berkembang pesat
            dalam menyediakan fasilitas modern, laboratorium komputer, dan
            workshop teknik berstandar nasional. Kini, SMK Negeri 1 Adiwerna
            dikenal sebagai salah satu sekolah rujukan vokasi yang aktif
            melahirkan lulusan berdaya saing tinggi.
          </p>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-text-main">
              Budaya & Nilai Utama
            </h2>
            <p className="text-sm text-gray-500 dark:text-dark-text-muted">
              Prinsip dasar yang menjiwai seluruh proses pembelajaran vokasi di
              sekolah kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl w-fit">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-dark-text-main">
                    {value.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-dark-text-muted leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;

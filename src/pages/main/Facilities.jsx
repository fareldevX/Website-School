import { useState } from "react";
import BannerPage from "../../components/common/BannerPage";
import { facilitiesData, facilitiesCategories } from "../../constant/data";
import {
  LuMonitor,
  LuWrench,
  LuTrophy,
  LuWifi,
  LuMaximize2,
  LuCircleCheck,
  LuX,
} from "react-icons/lu";

function Facilities() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredFacilities =
    activeCategory === "Semua"
      ? facilitiesData
      : facilitiesData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-white-97 dark:bg-dark-bg text-gray-800 dark:text-gray-100 pb-20">
      <BannerPage
        tag="Fasilitas Belajar"
        title="Sarana & Prasarana Berstandar Industri"
        description="SMK Negeri 1 Adiwerna menyediakan fasilitas praktik dan sarana penunjang modern untuk mendukung proses belajar mengajar berbasis Teaching Factory."
      />

      <div className="max-w-6xl mx-auto px-4 -mt-6 space-y-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuMonitor size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                12+
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Lab Komputer & RPL
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuWrench size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                18+
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Bengkel Praktik TEFA
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuWifi size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                1 Gbps
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Jaringan Fiber Dedicated
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-950/40 text-orange-500 rounded-xl">
              <LuTrophy size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
                Standard
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Peralatan Industri
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {facilitiesCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-border hover:border-orange-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
                    title="Perbesar Gambar"
                  >
                    <LuMaximize2 size={18} />
                  </button>
                </div>
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* List Fitur Utama */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 space-y-1.5">
                  {item.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300"
                    >
                      <LuCircleCheck
                        size={14}
                        className="text-orange-500 shrink-0"
                      />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition"
            >
              <LuX size={20} />
            </button>
            <div className="aspect-video w-full bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-orange-500 uppercase">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Facilities;

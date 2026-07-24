import { useState } from "react";
import { Link } from "react-router-dom";
import BannerPage from "../../components/common/BannerPage";
import { newsArticles, categories } from "../../constant/data";
import { LuSearch, LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle =
    newsArticles.find((item) => item.isFeatured) || newsArticles[0];

  return (
    <div className="min-h-screen bg-white-97 dark:bg-dark-bg text-gray-800 dark:text-dark-text-main pb-20">
      <BannerPage
        tag="Berita & Informasi"
        title="Kabar Terbaru SMK Negeri 1 Adiwerna"
        description="Dapatkan berita terkini seputar kegiatan sekolah, prestasi siswa, pengumuman resmi, dan informasi PPDB."
      />

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {featuredArticle && !searchTerm && selectedCategory === "Semua" && (
          <section className="-mt-6">
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm overflow-hidden grid md:grid-cols-12 gap-0">
              <div className="md:col-span-7 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Berita Utama
                </span>
              </div>
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <LuCalendar size={14} /> {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuClock size={14} /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-snug hover:text-orange-500 transition">
                    <Link to={`/berita/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    to={`/berita/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition"
                  >
                    Baca Selengkapnya <LuArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-white dark:bg-dark-card text-gray-600 dark:text-dark-text-main hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-dark-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <LuSearch
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition"
              />
            </div>
          </div>
        </section>

        <section>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xs text-orange-600 font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <LuCalendar size={13} /> {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <LuClock size={13} /> {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 hover:text-orange-500 transition">
                        <Link to={`/berita/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/berita/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-600 transition"
                    >
                      Baca Selengkapnya <LuArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <p className="text-gray-500 text-sm">
                Tidak ada berita yang cocok dengan kata kunci atau filter ini.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Blog;

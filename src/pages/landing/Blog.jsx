import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { newsArticles } from "../../constant/data";
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";

function Blog() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <Title
            title="Berita"
            text="Ikuti terus perkembangan informasi terkini, agenda kegiatan, pengumuman resmi, serta ragam cerita inspiratif dari seluruh civitas akademika kami di sini."
            link="View All"
            href="/berita"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(0, 3).map((article) => {
              const shortExcerpt =
                article.excerpt.length > 120
                  ? article.excerpt.substring(0, 120) + "..."
                  : article.excerpt;

              return (
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
                        {shortExcerpt}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

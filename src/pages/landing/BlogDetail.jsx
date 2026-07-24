import { Link, useParams } from "react-router-dom";
import { newsArticles } from "../../constant/data";
import {
  LuArrowLeft,
  LuTag,
  LuUser,
  LuCalendar,
  LuClock,
  LuMessageCircleQuestion,
} from "react-icons/lu";

function BlogDetail() {
  const { id } = useParams();
  const blog = newsArticles.find((b) => b.id === Number(id) || b.slug === id);

  const relatedBlogs = newsArticles
    .filter((b) => b.id !== blog?.id && b.slug !== blog?.slug)
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="py-20 text-center container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h2>
        <p className="text-gray-500 mb-6">
          Artikel atau berita yang Anda cari mungkin telah dihapus atau
          dipindahkan.
        </p>
        <Link
          to="/berita"
          className="inline-flex items-center gap-2 btn-primary font-semibold px-4 py-2 rounded-xl"
        >
          <LuArrowLeft size={18} /> Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50/50 dark:bg-dark-bg min-h-screen text-gray-800 dark:text-dark-text-main">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          to="/berita"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 mb-6 transition-colors"
        >
          <LuArrowLeft size={16} /> Kembali ke Berita
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border transition-colors overflow-hidden p-6 md:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 mb-4">
              <LuTag size={12} /> {blog.category || "Berita Utama"}
            </span>

            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-400 dark:text-gray-400 pb-6 border-b border-gray-100 dark:border-dark-border mb-6">
              <div className="flex items-center gap-1.5">
                <LuUser size={16} />
                <span>Oleh: {blog.author || "Tim Hubin SMKN 1 Adiwerna"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LuCalendar size={16} />
                <span>{blog.date || "20 Jul 2026"}</span>
              </div>
              {blog.readTime && (
                <div className="flex items-center gap-1.5">
                  <LuClock size={16} />
                  <span>{blog.readTime}</span>
                </div>
              )}
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-700 shadow-inner">
              <img
                src={blog.image || blog.img}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-5">
              {Array.isArray(blog.desc) ? (
                blog.desc.map((item, index) => {
                  if (Array.isArray(item)) {
                    return (
                      <ul
                        key={index}
                        className="list-disc list-inside pl-2 space-y-1.5 text-sm md:text-base text-gray-600 dark:text-gray-300"
                      >
                        {item.map((list, listIndex) => (
                          <li key={listIndex} className="leading-relaxed">
                            {list}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify"
                    >
                      {item}
                    </p>
                  );
                })
              ) : (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {blog.desc || blog.excerpt}
                </p>
              )}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white dark:bg-dark-card p-5 md:p-6 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm space-y-4">
              <div className="pb-3 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Berita Lainnya
                </h3>
              </div>

              <div className="space-y-4">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.id}
                    to={`/berita/${item.slug || item.id}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                      <img
                        src={item.image || item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider block mb-0.5">
                        {item.category || "Berita"}
                      </span>
                      <h4 className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-200 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border text-center space-y-5">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 bg-orange-50 dark:bg-orange-950/40">
                <LuMessageCircleQuestion size={26} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Ada Pertanyaan?
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Tim kami siap membantu Anda seputar informasi sekolah &
                  pendaftaran.
                </p>
              </div>

              <a
                href="https://wa.me/6285888081802"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-orange-500/20 text-xs md:text-sm transition duration-200"
              >
                Hubungi Kami
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

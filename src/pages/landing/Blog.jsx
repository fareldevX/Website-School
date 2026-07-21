import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { blogs } from "../../constant/data";
import { LuChevronRight } from "react-icons/lu";

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
            {blogs.map((blog) => {
              const firstParagraph =
                typeof blog.desc[0] === "string" ? blog.desc[0] : "";

              const shortDesc =
                firstParagraph.length > 120
                  ? firstParagraph.substring(0, 120) + "..."
                  : firstParagraph;

              return (
                <div
                  key={blog.id}
                  className="flex flex-col h-full bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-border"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-dark-text-main line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                        <Link to={`/berita/${blog.id}`}>{blog.title}</Link>
                      </h4>

                      <p className="text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed text-justify">
                        {shortDesc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/berita/${blog.id}`}
                        className="group text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
                      >
                        Baca Selengkapnya
                        <LuChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </div>
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

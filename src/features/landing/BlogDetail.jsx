import { Link, useParams } from "react-router-dom";
import { blogs } from "../../constant/data";
import {
  LuArrowLeft,
  LuTag,
  LuUser,
  LuCalendar,
  LuMessageCircleQuestion,
} from "react-icons/lu";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  return (
    <div className="py-12">
      <div className="container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <LuArrowLeft size={16} /> Kembali ke Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 md:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 mb-4">
              <LuTag size={12} /> Sekolah Adiwiyata
            </span>

            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 pb-6 border-b border-gray-100 mb-6">
              <div className="flex items-center gap-1.5">
                <LuUser size={16} className="text-gray-400" />
                <span>Oleh: Tim Hubin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LuCalendar size={16} className="text-gray-400" />
                <span>5 Juni 2023</span>
              </div>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 bg-gray-100 shadow-inner">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-6">
              {blog.desc.map((desc, index) => {
                if (Array.isArray(desc)) {
                  return (
                    <ul
                      key={index}
                      className="list-decimal list-inside pl-4 space-y-1 text-sm text-gray-600"
                    >
                      {desc.map((list, listIndex) => (
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
                    className="text-sm md:text-base text-gray-600 leading-relaxed text-justify"
                  >
                    {desc}
                  </p>
                );
              })}
            </div>
          </article>

          <aside className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-xl space-y-3">
              <div className="mb-4 pb-1.5 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-600">
                  Blog Lainnya
                </span>
              </div>
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-md">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {blog.desc[0].substring(0, 50)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-orange-500 border-3 border-orange-50">
                  <LuMessageCircleQuestion size={26} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Apakah ada pertanyaan?
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 max-w-sm">
                    Tim kami siap membantu Anda. Klik tombol di bawah untuk
                    langsung terhubung dengan kami!
                  </p>
                </div>

                <button className="btn-primary rounded-xl font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-colors duration-200">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { programs } from "../../constant/data";

function Program() {
  return (
    <section className="section">
      <div className="container">
        <Title
          title="Program Keahlian"
          text="Pilihan program keahlian strategis yang dirancang khusus untuk membekali siswa dengan keterampilan praktis, sertifikasi industri, dan karakter unggul guna mencetak generasi yang siap kerja serta mampu bersaing di era digital global."
          link="View All"
          href="/program-keahlian"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.id}
                className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="bg-[#FFF6E9] dark:bg-orange-950/20 rounded-xl p-8 relative flex items-center justify-center mb-6">
                    <span className="absolute top-3 left-3 bg-white dark:bg-gray-800 text-orange-600 font-bold text-xs px-3 py-1 rounded-md shadow-xs border border-orange-100 dark:border-transparent">
                      {program.shortTitle}
                    </span>

                    <div className="bg-orange-500 text-white p-3.5 rounded-xl shadow-md shadow-orange-500/20">
                      <Icon size={32} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-3">
                    {program.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6">
                    {program.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {program.prospek.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#FFF6E9] dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/program-keahlian/${program.slug}`}
                    className="w-full inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition text-sm shadow-md shadow-orange-500/20"
                  >
                    Lihat Detail Jurusan
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Program;

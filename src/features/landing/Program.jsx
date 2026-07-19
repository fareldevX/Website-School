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
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.id}
                className="flex flex-col gap-2 bg-white dark:bg-dark-card p-4 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-40 flex items-center justify-center bg-orange-100 rounded-lg">
                  <span className="absolute top-3 left-3 text-xs font-bold bg-white text-orange-50 px-3 py-1 rounded-md border border-gray-100 shadow-sm uppercase tracking-wider">
                    {program.shortTitle}
                  </span>
                  <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Icon size={34} className="text-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 justify-between space-y-3">
                  <div className="space-y-2 mt-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-dark-text-main line-clamp-2">
                      {program.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-dark-text-muted leading-relaxed line-clamp-3 text-justify">
                      {program.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {program.prospek.map((prospek, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-3 py-1 bg-orange-100 dark:bg-gray-600/50 text-orange-600 dark:text-white rounded-md"
                        >
                          {prospek}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="py-3">
                    <Link
                      to={`/program-keahlian/${program.slug}`}
                      className="btn-primary block text-center text-sm font-semibold w-full rounded-xl shadow-md"
                    >
                      Lihat Detail Jurusan
                    </Link>
                  </div>
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

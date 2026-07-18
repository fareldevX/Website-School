function Action() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative p-8 md:p-14 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl shadow-xl shadow-gray-100/50 dark:shadow-none transition-all duration-300 overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-100/60 dark:bg-orange-950/20 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100/70 dark:bg-slate-900/40 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">
                Penerimaan Siswa Baru
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-dark-text-main leading-tight transition-colors">
                Siap Untuk Mewujudkan Masa Depan Cemerlang?
              </h2>
              <p className="text-sm md:text-base text-gray-500 dark:text-dark-text-muted leading-relaxed max-w-2xl mx-auto transition-colors">
                Mari bergabung bersama komunitas pembelajar inovatif. Kembangkan
                potensi teknis dan karakter unggulmu untuk siap bersaing di
                dunia kerja internasional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <button className="btn-primary w-full sm:w-auto">
                Jelajahi Jurusan
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                PPDB Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Action;

import { LuArrowRight } from "react-icons/lu";

function BannerPage({ tag, title, description, buttons }) {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center space-y-4">
        {tag && (
          <span className="px-3.5 py-1 text-xs font-bold bg-orange-500 text-white rounded-full uppercase tracking-wider inline-block shadow-lg shadow-orange-500/20">
            {tag}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm md:text-base text-gray-500 dark:text-dark-text-muted max-w-2xl mx-auto leading-relaxed transition-colors">
            {description}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="w-full sm:w-auto pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href || "#"}
                onClick={btn.onClick}
                className={`${
                  btn.variant === "secondary"
                    ? "btn-secondary font-semibold"
                    : "btn-primary font-bold inline-flex items-center justify-center gap-2"
                } w-full sm:w-auto`}
              >
                {btn.text}
                {btn.showIcon !== false && btn.variant !== "secondary" && (
                  <LuArrowRight size={18} />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BannerPage;

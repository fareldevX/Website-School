import { Link } from "react-router-dom";

function Title({ title, text, link, href }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2>{title}</h2>
        <p className="max-w-160 mt-4 mb-6 text-base text-gray-600 dark:text-dark-text-muted">
          {text}
        </p>
      </div>

      <Link to={href} className="btn-secondary text-sm font-semibold">
        {link}
      </Link>
    </div>
  );
}

export default Title;

function Title({ title, text, link }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2>{title}</h2>
        <p className="max-w-160 mt-4 mb-6 text-base text-gray-600">{text}</p>
      </div>

      <button className="btn-secondary">{link}</button>
    </div>
  );
}

export default Title;
